package logic

import (
	"gitee.com/microbeam/mcbeam-mind-mahjong/common"
	"gitee.com/microbeam/mcbeam-mind-mahjong/util"
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
	operators  map[*MJPlayer]Operate
}
type Operate struct {
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
		operators: make(map[*MJPlayer]Operate),
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
	m.fsm.Event(common.EV_FAPAI)
}
func (m *MJRoom) onFaPai() {
	for _, v := range m.room.GetGamePlayers() {
		p := v.(*MJPlayer)
		p.setHandTitls(m.wallCard.ForwardDrawMulti(13))
	}

	m.fsm.Event(common.EV_CHUPAI)
}
func (m *MJRoom) onChuPai() {
	m.currPlayer.reqChuPai()

}
func (m *MJRoom) onOperate(event *fsm.Event) {
	target := event.Args[0].(*MJPlayer)
	targetCard := event.Args[1].(int)

	m.operators = make(map[*MJPlayer]Operate)
	for _, v := range m.room.GetGamePlayers() {
		p := v.(*MJPlayer)
		if p == m.currPlayer {
			continue
		}
		op := p.canOperate(target, targetCard)
		if len(op) > 0 {
			p.reqOperate(op)

			m.operators[p] = Operate{
				ValidateOps: op,
				AckOp:       common.OP_NONE,
				target:      target.ChairID(),
				targetCard:  targetCard,
			}
		}
	}
}
func (m *MJRoom) doOperate(p *MJPlayer, op common.OpCode) {
	if m.fsm.Current() != common.ST_OPERATE {
		return
	}
	ops, ok := m.operators[p]
	if !ok {
		return
	}
	find := false
	for _, v := range ops.ValidateOps {
		if v == op {
			find = true
		}
	}
	if !find {
		return
	}
	ops.AckOp = op

	allAck := true
	for _, p := range m.operators {
		if p.AckOp == common.OP_NONE {
			allAck = false
		}
	}
	if !allAck {
		return
	}

	for p, op := range m.operators {
		if op.AckOp == common.OP_WIN {
			break
		}
		if op.AckOp == common.OP_KONG {
			break
		}
		if op.AckOp == common.OP_PONG {
			p.doPong(op.lastTile)
			break
		}
		if op.AckOp == common.OP_CHOW {
			break
		}
	}
	//to do

	m.currPlayer = p
	m.fsm.Event(common.EV_CHUPAI)
}
