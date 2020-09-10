package logic

import (
	"context"
	"gitee.com/microbeam/mcbeam-mind-mahjong/card"
	"gitee.com/microbeam/mcbeam-mind-mahjong/common"
	"gitee.com/microbeam/mcbeam-mind-mahjong/setting"
	"gitee.com/microbeam/mcbeam-mind-mahjong/util"
	"gitee.com/microbeam/mcbeam-mind-mahjong/win"
	"github.com/looplab/fsm"
	proto_mj "github.com/wolfplus2048/mcbeam-example/protos/mj"
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
	isReady      bool
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

func (p *MJPlayer) getChairId() int {
	return p.player.GetChairId()
}
func (p *MJPlayer) GetUid() string {
	return p.player.GetUid()
}
func (p *MJPlayer) push(route string, v interface{}) {
	p.player.Push(route, v)
}
func (p *MJPlayer) setHandTitls(cards []int) {
	p.handCards = cards
	not := &proto_mj.HandCardsNot{}
	not.HandCards = util.IntSliceToInt32(cards)
	p.push("handcardsnot", not)
}
func (p *MJPlayer) doReady() {
	p.isReady = true
}
func (p *MJPlayer) reset() {
	p.handCards = []int{}
	p.isReady = false
	p.showCards = make([]*card.ShowCard, 0)
	p.discardCards = []int{}
	p.timerId = -1
}
func (p *MJPlayer) reqChuPai() {
	//send
	p.push("chupaireq", proto_mj.OperateReq{OpCodes: []int32{common.OP_CHOW}})

	p.timerId = scheduler.NewTimer(10*time.Second, func() {
		p.doChuPai(p.handCards[len(p.handCards)-1])
	})
}
func (p *MJPlayer) doChuPai(card int) {
	if p.room.currPlayer != p || p.room.fsm.Current() != common.ST_CHUPAI {
		return
	}
	if !util.IntInSlice(card, p.handCards) {
		return
	}
	scheduler.RemoveTimer(p.timerId)
	p.timerId = -1
	p.handCards = util.SliceDel(p.handCards, card)
	p.discardCards = append(p.discardCards, card)

	p.room.broadcast("operate", &proto_mj.OperateNot{
		ChairId: (int32)(p.getChairId()),
		OpCode:  common.OP_CHOW,
		Cards:   []int32{(int32)(card)},
	})
	scheduler.NewTimer(2*time.Second, func() {
		p.room.fsm.Event(common.EV_OPERATE, p.getChairId(), card)

	})
}
func (p *MJPlayer) reqOperate(ops []common.OpCode) {
	req := &proto_mj.OperateReq{}
	for _, o := range ops {
		req.OpCodes = append(req.OpCodes, (int32)(o))
	}
	p.push("operatereq", req)

	p.timerId = scheduler.NewTimer(10*time.Second, func() {
		p.doOperate(common.OP_PASS_CANCEL)
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
func (p *MJPlayer) doPong(c int) {
	p.handCards = util.SliceDel(p.handCards, c, c)
	p.showCards = append(p.showCards, card.NewShowCard(common.OP_PONG, 0, []int{c, c, c}, false))
	p.room.currPlayer = p
	p.fsm.Event(common.EV_CHUPAI)
}
func (p *MJPlayer) canOperate(target int, c int) []common.OpCode {
	var ops []common.OpCode
	cards := util.SliceCopy(p.handCards)

	cards = append(cards, c)
	sort.Ints(cards)

	cardMap := util.SliceToMap(cards)
	if setting.EnablePong() {
		if num, ok := cardMap[c]; ok && num >= 3 {
			ops = append(ops, common.OP_PONG)
		}
	}
	if setting.EnableKong() {
		if num, ok := cardMap[c]; ok && num >= 4 {
			ops = append(ops, common.OP_KONG)
		}
	}
	if setting.EnableChow() {

	}
	if win.CanWin(p.handCards, []int{}) {
		ops = append(ops, common.OP_WIN)
	}
	return ops
}
func (p *MJPlayer) doMoPai() {
	//to do

}
