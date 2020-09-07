package logic

import (
	"context"
	"github.com/looplab/fsm"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-example/room_srv/room"
	"github.com/wolfplus2048/mcbeam-plus"
	"github.com/wolfplus2048/mcbeam-plus/scheduler"
	"time"
)

func GetGamePlayerFromCtx(ctx context.Context) *MJPlayer {
	s := mcbeam.GetSessionFromCtx(ctx)
	p, ok := room.Manager.FindPlayer(s.UID())
	if !ok {
		return nil
	}
	pg := p.GetGamePlayer()
	if pg == nil {
		return nil
	}
	pmj, _ := pg.(*MJPlayer)
	return pmj
}

type MJPlayer struct {
	player       *base.BasePlayer
	handCards    []int
	showCards    []int
	discardCards []int
	fsm          *fsm.FSM
	room         *MJRoom
	timerId      int64
}

func newMJPlayer() *MJPlayer {
	p := &MJPlayer{
		player:       nil,
		handCards:    nil,
		showCards:    nil,
		discardCards: nil,
		fsm:          nil,
	}
	p.fsm = fsm.NewFSM(
		"closed",
		fsm.Events{},
		fsm.Callbacks{})
	return p
}

func (p *MJPlayer) setHandTitls(titls []int) {
	p.handCards = titls
}
func (p *MJPlayer) ready() {

}
func (p *MJPlayer) reqChuPai() {
	//send

	p.timerId = scheduler.NewTimer(10*time.Second, func() {
		p.doChuPai(-1)
	})
}
func (p *MJPlayer) doChuPai(tile int) {
	if p.room.currPlayer != p || p.room.fsm.Current() != SPlayerChuPai {
		return
	}
	scheduler.RemoveTimer(p.timerId)
	p.timerId = -1

	//to do

	p.room.fsm.Event(EOperate)
}
func (p *MJPlayer) reqOperate(op []int) {
	//send

	p.timerId = scheduler.NewTimer(10*time.Second, func() {
		p.doOperate(-1)
	})
}
func (p *MJPlayer) doOperate(op int) {
	if p.room.currPlayer != p || p.room.fsm.Current() != SPlayerChuPai {
		return
	}
	scheduler.RemoveTimer(p.timerId)
	p.timerId = -1
	p.room.doOperate(p)
}
