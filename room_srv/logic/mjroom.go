package logic

import (
	"gitee.com/microbeam/mcbeam-mind-mahjong/wall"
	"gitee.com/microbeam/mcbeam-mind-mahjong/win"
	"github.com/looplab/fsm"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-plus/scheduler"
	"time"
)

const (
	SInvalid         = "invalid"
	SBegin           = "begin"
	SMakeDealer      = "makedealer"
	SFaPai           = "fapai"
	SPlayerChuPai    = "chupai"
	SPlayerOperation = "operation"
	SPlayerChi       = "chipai"
	SPlayerPeng      = "pengpai"
	SPlayerGang      = "gangpai"
	SPlayerHu        = "hupai"
	SPlayerMoPai     = "mo pai"
)
const (
	EInvalid    = "invalid event"
	EBegin      = "begin event"
	EMakeDealer = "makedealer"
	EFaPai      = "fapai"
	EChuPai     = "chupai"
	EOperate    = "operate"
	EChiPai     = "chipai"
	EPeng       = "pengpai"
	EHu         = "hupai"
	EGuo        = "guopai"
)

type MJRoom struct {
	room       base.BaseRoom
	wallCard   *wall.Wall
	winLogic   *win.Win
	fsm        *fsm.FSM
	dealer     *MJPlayer
	currPlayer *MJPlayer
	timerId    int64
	operators  map[*MJPlayer]int
}

func NewRoom() *MJRoom {
	mj := &MJRoom{
		room:      nil,
		wallCard:  nil,
		winLogic:  nil,
		fsm:       nil,
		operators: make([]*MJPlayer, 0),
	}
	mj.fsm = fsm.NewFSM("EInvalid",
		fsm.Events{
			{EBegin, []string{SInvalid}, SBegin},
			{EMakeDealer, []string{SBegin}, SMakeDealer},
			{EFaPai, []string{SMakeDealer}, SFaPai},
			{EChiPai, []string{SFaPai}, SPlayerChuPai},
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

	m.fsm.Event(EMakeDealer)
}
func (m *MJRoom) onMakeDealer() {
	m.dealer = m.room.GetGamePlayers()[0].(*MJPlayer)
	m.currPlayer = m.dealer
	m.fsm.Event(EFaPai)
}
func (m *MJRoom) onFaPai() {
	for _, v := range m.room.GetGamePlayers() {
		p := v.(*MJPlayer)
		p.setHandTitls(m.wallCard.ForwardDrawMulti(13))
	}

	m.fsm.Event(EChuPai)
}
func (m *MJRoom) onChuPai() {
	m.currPlayer.reqChuPai()

}
func (m *MJRoom) onOperate() {
	m.operators = []*MJPlayer{}
	for _, v := range m.room.GetGamePlayers() {
		p := v.(*MJPlayer)
		if p == m.currPlayer {
			continue
		}
		op := p.canOperate(m.currPlayer.lastChuPai)
		if len(op) > 0 {
			p.reqOperate(op)
			m.operators = append(m.operators, p)
		}
	}
}
func (m *MJRoom) doOperate(p *MJPlayer, op int) {
	for i, v := range m.operators {
		if v == p {
			m.operators = append(m.operators[:i], m.operators[i+1:]...)
		}
	}
	if len(m.operators) == 0 {

	}
}
