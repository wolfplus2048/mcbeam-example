package handler

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/store"
	proto_auth "github.com/wolfplus2048/mcbeam-example/protos/auth"
	"github.com/wolfplus2048/mcbeam-plus"
)

type Handler struct {
	Service micro.Service
}

func (h *Handler) Greeting(ctx context.Context, req *proto_auth.LoginReq) error {
	logger.Debugf("Greeting %s", req.Username)
	return nil
}
func (h *Handler) Login(ctx context.Context, req *proto_auth.LoginReq, rsp *interface{}) error {
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
	return nil
}
