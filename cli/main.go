package main

import (
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/web"
	"net/http"
)

func main() {
	service := web.NewService(web.Name("client"),
		web.Address(":3251"))
	service.Handle("/web/", http.StripPrefix("/web/", http.FileServer(http.Dir("example/cli/web"))))
	if err := service.Init(); err != nil {
		logger.Fatal(err)
	}
	if err := service.Run(); err != nil {
		logger.Fatal()
	}
}
