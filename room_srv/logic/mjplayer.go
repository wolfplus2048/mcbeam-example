package logic

import (
	"context"
	"gitee.com/microbeam/mcbeam-mind-mahjong/card"
	"gitee.com/microbeam/mcbeam-mind-mahjong/common"
	"gitee.com/microbeam/mcbeam-mind-mahjong/setting"
	"gitee.com/microbeam/mcbeam-mind-mahjong/util"
	"github.com/looplab/fsm"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-example/room_srv/room"
	"github.com/wolfplus2048/mcbeam-plus"
	"github.com/wolfplus2048/mcbeam-plus/scheduler"
	"sort"
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
	player       base.BasePlayer
	handCards    []int
	showCards    []*card.ShowCard
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

func (p *MJPlayer) getChairID() int {
	return p.player.GetChairID()
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
func (p *MJPlayer) doChuPai(card int) {
	if p.room.currPlayer != p || p.room.fsm.Current() != common.ST_CHUPAI {
		return
	}
	scheduler.RemoveTimer(p.timerId)
	p.timerId = -1

	//to do

	p.room.fsm.Event(common.EV_OPERATE, p.getChairID(), card)
}
func (p *MJPlayer) reqOperate(op []int) {
	//send

	p.timerId = scheduler.NewTimer(10*time.Second, func() {
		p.doOperate(-1)
	})
}
func (p *MJPlayer) doOperate(op common.OpCode) {
	if p.room.currPlayer != p || p.room.fsm.Current() != common.ST_OPERATE {
		return
	}
	scheduler.RemoveTimer(p.timerId)
	p.timerId = -1
	p.room.doOperate(p, op)
}
func (p *MJPlayer) doPong(c int, target int) {
	p.handCards = util.SliceDel(p.handCards, c, c)
	p.showCards = append(p.showCards, card.NewShowCard(common.OP_PONG, 0, []int{c, c, c}, false))
	p.room.currPlayer = p
	p.fsm.Event(common.EV_CHUPAI)
}
func (p *MJPlayer) canOperate(target int, c int) []common.OpCode {
	ops := []common.OpCode{}
	cards := util.SliceCopy(p.handCards)
	sort.Ints(cards)

	cards = append(cards, c)

	cardMap := util.SliceToMap(p.handCards)
	if setting.EnablePong() {
		if cardMap[c] >= 2 {
			ops = append(ops, common.OP_PONG)
		}
	}
	if setting.EnableChi() {
		dis := p.getChairID() - target
		if dis == 1 || dis == -setting.PlayerNum() { //上家
			card.
		}
	}
	return []common.OpCode{}
}