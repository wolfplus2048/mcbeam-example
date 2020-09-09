package logic

import (
	"gitee.com/microbeam/mcbeam-mind-mahjong/common"
	"gitee.com/microbeam/mcbeam-mind-mahjong/setting"
	"gitee.com/microbeam/mcbeam-mind-mahjong/wall"
	"gitee.com/microbeam/mcbeam-mind-mahjong/win"
	"github.com/looplab/fsm"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-plus/scheduler"
	"time"
)

type MJRoom struct {
	room       base.BaseRoom
	wallCard   *wall.Wall
	winLogic   *win.Win
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

func NewRoom() *MJRoom {
	mj := &MJRoom{
		room:      nil,
		wallCard:  nil,
		winLogic:  nil,
		fsm:       nil,
		operators: nil,
	}
	mj.fsm = fsm.NewFSM(common.ST_NONE,
		fsm.Events{
			{common.EV_BEGIN, []string{common.ST_NONE}, common.ST_BEGIN},
			{common.EV_DINGZHUANG, []string{common.ST_BEGIN}, common.ST_DINGZHUANG},
			{common.EV_FAPAI, []string{common.ST_DINGZHUANG}, common.ST_FAPAI},
			{common.EV_CHUPAI, []string{common.ST_FAPAI}, common.ST_CHUPAI},
		},
		fsm.Callbacks{
			"enter_begin": func(e *fsm.Event) { mj.onBegin() },
		},
	)
	return mj
}
func (m *MJRoom) ready() {

}

func (m *MJRoom) onBegin() {
	m.ready()
	for _, v := range m.room.GetGamePlayers() {
		p := v.(*MJPlayer)
		p.ready()
	}
	//sendto

	m.fsm.Event(common.EV_DINGZHUANG)
}
func (m *MJRoom) onMakeDealer() {
	m.dealer = m.room.GetGamePlayers()[0].(*MJPlayer)
	m.currPlayer = m.dealer
	//to do
	scheduler.NewTimer(10*time.Second, func() {
		m.fsm.Event(common.EV_FAPAI)
	})
}
func (m *MJRoom) onFaPai() {
	for _, v := range m.room.GetGamePlayers() {
		p := v.(*MJPlayer)
		if v == m.dealer {
			p.setHandTitls(m.wallCard.ForwardDrawMulti(setting.HandlCardNum() + 1))
		} else {
			p.setHandTitls(m.wallCard.ForwardDrawMulti(setting.HandlCardNum()))
		}
	}
	scheduler.NewTimer(10*time.Second, func() {
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
		op := p.canOperate(target.getChairID(), targetCard)
		if len(op) > 0 {
			p.reqOperate(op)
			m.operators = append(m.operators, Operator{
				operator:    v.(*MJPlayer),
				target:      target.getChairID(),
				targetCard:  targetCard,
				ValidateOps: op,
				AckOp:       common.OP_NONE,
			})
		}
	}
	if len(m.operators) <= 0 {
		m.currPlayer = m.room.GetNextPlayer((base.GamePlayer)(m.currPlayer)).(*MJPlayer)
		m.fsm.Event(common.EV_CHUPAI)
	}
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
	m.fsm.Event(common.EV_MOPAI)
}
func (m *MJRoom) onMoPai() {
	m.currPlayer.doMoPai()
	m.fsm.Event(common.EV_CHUPAI)
}
