package main

import (
	"github.com/micro/go-micro/v2"
	"github.com/wolfplus2048/mcbeam-example/test/handler"
)

func main() {
	service := micro.NewService()
	service.Init()
	service.Server().Handle(service.Server().NewHandler(&handler.Handler{Service: service}))
	service.Run()
}
