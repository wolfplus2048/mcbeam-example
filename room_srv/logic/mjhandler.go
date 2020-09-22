package logic

import (
	"context"
	"gitee.com/microbeam/mcbeam-mind-mahjong/common"
	"gitee.com/microbeam/mcbeam-mind-mahjong/setting"
	"gitee.com/microbeam/mcbeam-mind-mahjong/wall"
	"gitee.com/microbeam/mcbeam-mind-mahjong/win"
	proto_mj "github.com/wolfplus2048/mcbeam-example/protos/mj"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-example/room_srv/manager"
)

type MJHandler struct {
}

func (h *MJHandler) Init() {
	setting.Init(
		setting.WithPlayerNum(2),
		setting.WithChow(),
		setting.WithPong(),
		setting.WithKong())
	wall.Init(wall.WithCards([]int{wall.BAM, wall.CRAK, wall.DOT}))
	win.Init(win.WithQiDui(),
		win.AddRule(QingYiSe()))
}

func (h *MJHandler) AfterInit() {
}

func (h *MJHandler) BeforeShutdown() {
}

func (h *MJHandler) Shutdown() {
}

func (h *MJHandler) Ready(ctx context.Context, req *proto_mj.ReadyReq) {
	base.Run(func() {
		ply := manager.GetGamePlayerFromCtx(ctx)
		if ply == nil || ply.room == nil {
			return
		}
		ply.doReady()
		ply.room.tryBegin()
	})

}

func (h *MJHandler) Operate(ctx context.Context, res *proto_mj.OperateRes) {
	base.Run(func() {
		p := manager.GetGamePlayerFromCtx(ctx)
		if res.OpCode == (int32)(common.OP_CHOW) {
			p.doChuPai(int(res.Cards[0]))
		}
	})

}
