package logic

import (
	"gitee.com/microbeam/mcbeam-mind-mahjong/common"
	"gitee.com/microbeam/mcbeam-mind-mahjong/setting"
	"gitee.com/microbeam/mcbeam-mind-mahjong/wall"
	"github.com/looplab/fsm"
	"github.com/micro/go-micro/v2/logger"
	proto_mj "github.com/wolfplus2048/mcbeam-example/protos/mj"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-plus/scheduler"
	"math/rand"
	"time"
)

type MJRoom struct {
	room       base.BaseRoom
	fsm        *fsm.FSM
	dealer     *MJPlayer
	currPlayer *MJPlayer
	timerId    int64
	operators  []Operator
}
type Operator struct {
	operator   *MJPlayer
	target     int
	targetCard int

	ValidateOps []common.OpCode
	AckOp       common.OpCode
}

func NewMJRoom() base.GameRoom {
	mj := &MJRoom{}
	mj.fsm = fsm.NewFSM(
		common.ST_NONE,
		fsm.Events{
			{common.EV_BEGIN, []string{common.ST_NONE}, common.ST_BEGIN},
			{common.EV_SET_DEALER, []string{common.ST_BEGIN}, common.ST_SET_DEALER},
			{common.EV_FAPAI, []string{common.ST_SET_DEALER}, common.ST_FAPAI},
			{common.EV_CHUPAI, []string{common.ST_FAPAI, common.ST_OPERATE, common.ST_SELF_OPERATE}, common.ST_CHUPAI},
			{common.EV_OPERATE, []string{common.ST_CHUPAI}, common.ST_OPERATE},
			{common.EV_SELF_OPERATE, []string{common.EV_MOPAI}, common.ST_OPERATE},
			{common.EV_MOPAI, []string{common.ST_CHUPAI}, common.ST_MOPAI},
		},
		fsm.Callbacks{
			"enter_" + common.ST_BEGIN:        func(e *fsm.Event) { mj.onBegin() },
			"enter_" + common.ST_SET_DEALER:   func(e *fsm.Event) { mj.onSetDealer() },
			"enter_" + common.ST_FAPAI:        func(e *fsm.Event) { mj.onFaPai() },
			"enter_" + common.ST_MOPAI:        func(e *fsm.Event) { mj.onMoPai() },
			"enter_" + common.ST_CHUPAI:       func(e *fsm.Event) { mj.onChuPai() },
			"enter_" + common.ST_OPERATE:      func(e *fsm.Event) { mj.onOperate(e) },
			"enter_" + common.ST_SELF_OPERATE: func(e *fsm.Event) { mj.onSelfOperate() },
		},
	)
	return mj
}
func (m *MJRoom) SetBaseRoom(r base.BaseRoom) {
	m.room = r
}
func (m *MJRoom) tryBegin() {
	logger.Debugf("tryBegin()")
	allready := true
	for _, v := range m.room.GetGamePlayers() {
		if v == nil {
			allready = false
		}
		p := v.(*MJPlayer)
		if !p.isReady {
			allready = false
		}
	}
	if !allready {
		return
	}
	m.fsm.Event(common.EV_BEGIN)
}
func (m *MJRoom) reset() {
	//	wall.Reset()
	wall.Shuffle()
}
func (m *MJRoom) broadcast(route string, payload interface{}) {
	for _, v := range m.room.GetGamePlayers() {
		if v == nil {
			continue
		}
		p := v.(*MJPlayer)
		p.push(route, payload)
	}
}
func (m *MJRoom) onBegin() {
	logger.Debugf("onBegin()")
	m.reset()
	for _, v := range m.room.GetGamePlayers() {
		p := v.(*MJPlayer)
		p.reset()

	}
	m.broadcast("BeginGameNot", &proto_mj.BeginGameNot{})
	scheduler.NewTimer(1*time.Second, func() {
		m.fsm.Event(common.EV_SET_DEALER)
	})
}
func (m *MJRoom) onSetDealer() {
	not := &proto_mj.SetDealerNot{}
	not.Dices = append(not.Dices, (int32)(rand.Int()%6))
	not.Dices = append(not.Dices, (int32)(rand.Int()%6))
	//index := (not.Dices[0] + not.Dices[1]) % (int32)(setting.PlayerNum())
	m.dealer = m.room.GetGamePlayers()[0].(*MJPlayer)
	m.currPlayer = m.dealer

	not.Uid = m.currPlayer.GetUid()
	m.broadcast("SetDealerNot", &proto_mj.SetDealerNot{
		Dices: nil,
		Uid:   m.currPlayer.GetUid(),
	})
	scheduler.NewTimer(2*time.Second, func() {
		m.fsm.Event(common.EV_FAPAI)
	})
}
func (m *MJRoom) onFaPai() {
	for _, v := range m.room.GetGamePlayers() {
		p := v.(*MJPlayer)
		if v == m.dealer {
			p.setHandTitls(wall.ForwardDrawMulti(setting.HandlCardNum() + 1))
		} else {
			p.setHandTitls(wall.ForwardDrawMulti(setting.HandlCardNum()))
		}
	}
	scheduler.NewTimer(2*time.Second, func() {
		m.fsm.Event(common.EV_CHUPAI)
	})
}
func (m *MJRoom) onChuPai() {
	m.currPlayer.reqChuPai()

}
func (m *MJRoom) onOperate(event *fsm.Event) {
	target := event.Args[0].(*MJPlayer)
	targetCard := event.Args[1].(int)

	m.operators = []Operator{}
	for _, v := range m.room.GetGamePlayers() {
		p := v.(*MJPlayer)
		if p == m.currPlayer {
			continue
		}
		op := p.canOperate(target.getChairId(), targetCard)
		if len(op) > 0 {
			op = append(op, common.OP_PASS_CANCEL)
			m.operators = append(m.operators, Operator{
				operator:    v.(*MJPlayer),
				target:      target.getChairId(),
				targetCard:  targetCard,
				ValidateOps: op,
				AckOp:       common.OP_NONE,
			})
			p.reqOperate(op)
		}
	}
	if len(m.operators) <= 0 {
		m.currPlayer = m.room.GetNextPlayer((base.GamePlayer)(m.currPlayer)).(*MJPlayer)
		m.fsm.Event(common.EV_MOPAI)
	}
}
func (m *MJRoom) onSelfOperate() {
	ops := m.currPlayer.canSelfOperate()
	if len(ops) <= 0 {
		m.currPlayer = m.room.GetNextPlayer(m.currPlayer).(*MJPlayer)
		m.fsm.Event(common.EV_CHUPAI)
		return
	}
	ops = append(ops, common.OP_PASS_CANCEL)
	m.operators = append(m.operators, Operator{
		operator:    m.currPlayer,
		ValidateOps: ops,
		AckOp:       common.OP_NONE,
	})
	m.currPlayer.reqOperate(ops)
}
func (m *MJRoom) doOperate(p *MJPlayer, op common.OpCode) {
	if m.fsm.Current() != common.ST_OPERATE {
		return
	}
	find := false
Out:
	for _, v := range m.operators {
		if v.operator == p {
			for _, o := range v.ValidateOps {
				if op == o {
					v.AckOp = op
					find = true
					break Out
				}
			}
		}
	}
	if !find {
		return
	}
	allAck := true
	for _, p := range m.operators {
		if p.AckOp == common.OP_NONE {
			allAck = false
		}
	}
	if !allAck {
		return
	}
	for _, v := range m.operators { //优先处理胡
		if v.AckOp == common.OP_WIN {
			return
		}
	}
	for _, v := range m.operators { //优先处理胡
		if v.AckOp == common.OP_WIN {
			return
		}
	}
	//都放弃了,下家摸牌
	m.currPlayer = m.room.GetNextPlayer(m.currPlayer).(*MJPlayer)
	scheduler.NewTimer(1*time.Second, func() {
		m.fsm.Event(common.EV_MOPAI)
	})
}
func (m *MJRoom) onMoPai() {
	m.currPlayer.doMoPai()
	m.Event(common.EV_CHUPAI, 1)
}
func (m *MJRoom) Event(event string, interval time.Duration, args ...interface{}) {
	scheduler.NewTimer(interval, func() {
		m.fsm.Event(event, args)
	})
}
