package logic

import (
	"context"
	"github.com/wolfplus2048/mcbeam-plus"
)

type MJHandler struct {
}

func (h *MJHandler) ChuPai(ctx context.Context, req *proto_room.ChuPaiReq) {
	p := GetGamePlayerFromCtx(ctx)
	p.doChuPai(req.tile)

}
