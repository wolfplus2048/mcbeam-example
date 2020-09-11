package logic

import (
	"context"
	"gitee.com/microbeam/mcbeam-mind-mahjong/common"
	proto_mj "github.com/wolfplus2048/mcbeam-example/protos/mj"
	"github.com/wolfplus2048/mcbeam-example/room_srv/room"
)

type MJHandler struct {
}

func (h *MJHandler) Init() {
}

func (h *MJHandler) AfterInit() {
}

func (h *MJHandler) BeforeShutdown() {
}

func (h *MJHandler) Shutdown() {
}

func (h *MJHandler) Ready(ctx context.Context, req *proto_mj.ReadyReq) {
	room.Manager.Run(func() {
		ply := GetGamePlayerFromCtx(ctx)
		if ply == nil || ply.room == nil {
			return
		}
		ply.doReady()
		ply.room.tryBegin()
	})

}

func (h *MJHandler) Operate(ctx context.Context, res *proto_mj.OperateRes) {
	room.Manager.Run(func() {
		p := GetGamePlayerFromCtx(ctx)
		if res.OpCode == (int32)(common.OP_CHOW) {
			p.doChuPai(int(res.Cards[0]))
		}
	})

}
