package handler

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/store"
	"github.com/wolfplus2048/mcbeam-example/protos/auth"
	"github.com/wolfplus2048/mcbeam-plus"
)

type Handler struct {
	Service micro.Service
}

func (h *Handler) Init() {
}

func (h *Handler) AfterInit() {
	//scheduler.NewTimer(2*time.Second, func() {
	//	logger.Debugf("ticker %d", time.Now().Second())
	//}, scheduler.Counter(4))
	//time.AfterFunc(5 * time.Second, func() {
	//	scheduler.RemoveTimer(id)
	//})
}

func (h *Handler) BeforeShutdown() {
}

func (h *Handler) Shutdown() {
	logger.Debugf("Shutdown")
}

func (h *Handler) Login(ctx context.Context, req *proto_auth.LoginReq) {
	logger.Infof("user login: %s", req.Username)
	s := mcbeam.GetSessionFromCtx(ctx)
	res := proto_auth.LoginRes{
		Uid:      uuid.New().String(),
		Username: req.Username,
	}
	err := h.Service.Options().Store.Write(&store.Record{
		Key:   res.Uid,
		Value: []byte(req.Username),
	}, store.WriteTo("cache", "user"))
	if err != nil {
		res.Code = err.Error()
		logger.Infof("store session err:%s", err.Error())
	}
	s.Bind(ctx, res.Uid)
	s.Push("LoginRes", &res)

}
