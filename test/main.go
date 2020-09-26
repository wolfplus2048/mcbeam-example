package main

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/metadata"
	"github.com/micro/go-micro/v2/server"
	"github.com/netdata/go-orchestrator/logger"
	"github.com/wolfplus2048/mcbeam-example/test/handler"
)

func SessionWrapper() server.HandlerWrapper {
	return func(h server.HandlerFunc) server.HandlerFunc {
		return func(ctx context.Context, req server.Request, rsp interface{}) error {
			uid, ok := metadata.Get(ctx, "mcb-session-uid")
			if ok {
				logger.Debugf("session md, uid:%s")
				ctx = metadata.Set(ctx, "player", uid)
			}
			return h(ctx, req, rsp)
		}
	}
}
func main() {
	service := micro.NewService(
		micro.WrapHandler(SessionWrapper()))
	service.Init()
	service.Server().Handle(service.Server().NewHandler(&handler.Handler{Service: service}))
	service.Run()
}
