package handler

import (
	"context"
	"errors"
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
}

func (h *Handler) BeforeShutdown() {
}

func (h *Handler) Shutdown() {
	logger.Debugf("Shutdown")
}
func (h *Handler) Greeting(ctx context.Context, req *proto_auth.LoginReq) error {
	s := mcbeam.GetSessionFromCtx(ctx)
	logger.Infof("Greeting: uid:%s, name:%s", s.UID(), req.Username)
	uid := uuid.New().String()
	s.Bind(ctx, uid)
	if s != nil {
		s.Push("LoginRes", &proto_auth.LoginRes{
			Uid:      s.UID(),
			Username: "Hello " + req.Username,
		})
		return nil
	}

	return errors.New("test rpc")
}
func (h *Handler) Login(ctx context.Context, req *proto_auth.LoginReq, rsp *proto_auth.LoginRes) error {
	logger.Infof("user login: %s", req.Username)
	rsp.Uid = uuid.New().String()
	rsp.Username = req.Username
	err := h.Service.Options().Store.Write(&store.Record{
		Key:   rsp.Uid,
		Value: []byte(req.Username),
	}, store.WriteTo("cache", "user"))
	if err != nil {
		rsp.Code = err.Error()
		logger.Infof("store session err:%s", err.Error())
	}
	s := mcbeam.GetSessionFromCtx(ctx)
	if s != nil {
		s.Bind(ctx, rsp.Uid)
	}
	return nil
}
