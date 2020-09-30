package handler

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/store"
	proto_auth "github.com/wolfplus2048/mcbeam-example/protos/auth"
)

type Handler struct {
	Service micro.Service
}

func (h *Handler) Hello(ctx context.Context, req *proto_auth.LoginReq) error {
	logger.Debugf("Hello %s", req.Username)
	return nil
}
func (h *Handler) Greeting(ctx context.Context, req *proto_auth.LoginReq, rsp *proto_auth.LoginRes) error {
	logger.Debugf("Greeting %s", req.Username)
	rsp.Uid = uuid.New().String()
	rsp.Username = "Hello " + req.Username

	err := h.Service.Options().Store.Write(&store.Record{
		Key:   rsp.Uid,
		Value: []byte(req.Username),
	}, store.WriteTo("cache", "user"))
	if err != nil {
		rsp.Code = err.Error()
		logger.Infof("store session err:%s", err.Error())
	}
	return nil
}
