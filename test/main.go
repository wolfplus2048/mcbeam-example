package main

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-example/test/handler"
	"github.com/wolfplus2048/mcbeam-plus/mcb_server/grpc"
)

func main() {
	logger.Init(logger.WithLevel(logger.DebugLevel))
	service := micro.NewService(micro.Server(grpc.NewServer())
	micro.WrapHandler())
	service.Init()
	service.Server().Handle(service.Server().NewHandler(&handler.Handler{Service: service}))
	service.Run()
}
