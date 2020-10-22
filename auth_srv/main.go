package main

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/broker/nats"
	"github.com/micro/go-micro/v2/config"
	"github.com/micro/go-micro/v2/config/cmd"
	"github.com/micro/go-micro/v2/config/source/env"
	"github.com/micro/go-micro/v2/config/source/file"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/micro/go-plugins/store/redis/v2"
	"github.com/wolfplus2048/mcbeam-example/auth_srv/handler"
	"github.com/wolfplus2048/mcbeam-plus"
)

func init() {
	cmd.DefaultStores["redis"] = redis.NewStore
	config.Load(
		file.NewSource(file.WithPath("config.yaml")),
		env.NewSource(),
	)
}
func main() {
	service := mcbeam.NewService(
		mcbeam.Name("auth"),
		mcbeam.Registry(etcd.NewRegistry()),
		mcbeam.Broker(nats.NewBroker()),
		mcbeam.Store(redis.NewStore()),
	)
	service.Options().Service.Init(micro.WrapHandler())

	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}

	service.Register(&handler.Handler{Service: service.Options().Service})
	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
