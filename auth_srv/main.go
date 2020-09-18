package main

import (
	"github.com/micro/go-micro/v2/broker/nats"
	"github.com/micro/go-micro/v2/config/cmd"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/registry/etcd"
	"github.com/micro/go-plugins/store/redis/v2"
	"github.com/wolfplus2048/mcbeam-example/auth_srv/handler"
	"github.com/wolfplus2048/mcbeam-plus"
	"github.com/wolfplus2048/mcbeam-plus/component"
)

func init() {
	cmd.DefaultStores["redis"] = redis.NewStore
}
func main() {
	logger.Init(logger.WithLevel(logger.DebugLevel))
	//err := config.Load(file.NewSource(
	//	file.WithPath("./auth_srv/config.toml"),
	//	source.WithEncoder(toml.NewEncoder())))
	//if err != nil {
	//	logger.Fatal(err)
	//}

	//logger.Debugf("app name: %s, version:%s", config.Get("app.name"), config.Get("app.ver"))

	service := mcbeam.NewService(
		mcbeam.Name("auth"),
		mcbeam.Registry(etcd.NewRegistry()),
		mcbeam.Broker(nats.NewBroker()),
		mcbeam.Store(redis.NewStore()))

	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	service.Register(&handler.Handler{Service: service.Options().Service},
		component.WithName("handler"))

	if err := service.Run(); err != nil {
		logger.Fatal(err)
	}
}
