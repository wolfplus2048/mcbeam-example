package main

import (
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/wolfplus2048/mcbeam-example/mgr_srv/handler"
	"github.com/wolfplus2048/mcbeam-plus"
)

func main() {
	service := mcbeam.NewService(
		mcbeam.Name("mgr"),
		mcbeam.Registry(etcd.NewRegistry()),
	)
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register(&handler.Handler{Client: service.Client()})
	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
