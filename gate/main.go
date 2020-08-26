package main

import (
	"githbu.com/wolfplus2048/mcbeam-example/gate/handler"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/broker/nats"
	"github.com/micro/go-micro/v2/config"
	"github.com/micro/go-micro/v2/config/encoder/toml"
	"github.com/micro/go-micro/v2/config/source"
	"github.com/micro/go-micro/v2/config/source/file"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/micro/go-plugins/store/redis/v2"
	"github.com/wolfplus2048/mcbeam-plus"
	"github.com/wolfplus2048/mcbeam-plus/component"
)

func main() {
	logger.Init(logger.WithLevel(logger.DebugLevel))
	err := config.Load(file.NewSource(
		file.WithPath("./gate/config.toml"),
		source.WithEncoder(toml.NewEncoder())))
	if err != nil {
		logger.Fatal(err)
	}


	logger.Debugf("app name: %s, version:%s", config.Get("app.name"), config.Get("app.ver"))

	service := mcbeam.NewService(
		mcbeam.Name(config.Get("app.name").String("gateway")),
		mcbeam.ClientAddress(":3250"),
		mcbeam.Registry(etcd.NewRegistry()),
		mcbeam.MicroService(
			micro.NewService(
				micro.Store(redis.NewStore()),
				micro.Broker(nats.NewBroker()),
			),
		),
	)


	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register(&handler.Handler{Service: service.Options().Service},
		component.WithName("auth"))

	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
