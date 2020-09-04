package handler

import (
	"context"
	proto_gate "githbu.com/wolfplus2048/mcbeam-example/protos/gate"
	proto_room "githbu.com/wolfplus2048/mcbeam-example/protos/room"
	"githbu.com/wolfplus2048/mcbeam-example/room_srv/room"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/store"
	"github.com/wolfplus2048/mcbeam-plus"
)

type Sub struct{}

func (s *Sub) Process(ctx context.Context, arg *proto_gate.LoginReq) error {
	logger.Debugf("uid %s closed", arg.Username)

	room.Manager.Run(func() {
		p, ok := room.Manager.FindPlayer(arg.Username)
		if !ok {
			return
		}
		r := p.GetRoom()
		r.LeaveRoom(p)
		if r.GetUserNum() == 0 {
			room.Manager.RemoveRoom(r.Id)
		}
		room.Manager.RemovePlayer(p.UID())
	})
	return nil
}

type Handler struct {
	Service micro.Service
}

func (h *Handler) Init() {
}

func (h *Handler) AfterInit() {
}

func (h *Handler) BeforeShutdown() {
}

func (h *Handler) Shutdown() {
}

func (h *Handler) CreateRoomRPC(ctx context.Context, req *proto_room.CreateRoomReq) (*proto_room.CreateRoomRes, error) {
	ret := make(chan error)
	var res *proto_room.CreateRoomRes

	room.Manager.Run(func() {
		logger.Debugf("crateRoom %s", req.Name)
		r, err := room.Manager.CreateRoom(req.Name)
		if err != nil {
			ret <- err
			return
		}
		res = &proto_room.CreateRoomRes{
			Room: &proto_room.Room{
				Id:    r.Id,
				Name:  r.Name,
				Users: r.GetUsers(),
			},
			ServerId: h.Service.Options().Server.Options().Name + "-" + h.Service.Options().Server.Options().Id,
		}
		ret <- nil
	})
	return res, <-ret
}
func (h *Handler) JoinRoom(ctx context.Context, req *proto_room.JoinReq) {
	s := mcbeam.GetSessionFromCtx(ctx)
	st := h.Service.Options().Store
	res, err := st.Read(s.UID(), store.ReadFrom("cache", "user"))
	if err != nil || len(res) < 1 {
		s.Push("JoinRes", &proto_room.JoinRes{
			Code: "invalidate user",
		})
		return
	}

	room.Manager.Run(func() {
		p, ok := room.Manager.FindPlayer(s.UID())
		if ok {
			s.Push("JoinRes", &proto_room.JoinRes{
				Code: "player already exists",
			})
			return
		}
		p = room.NewPlayer(s, s.UID(), string(res[0].Value))
		r, ok := room.Manager.GetRoom(req.Id)
		if !ok {
			s.Push("JoinRes", &proto_room.JoinRes{
				Code: "room not exists",
			})
			return
		}
		err = r.JoinRoom(p)
		if err != nil {
			s.Push("JoinRes", &proto_room.JoinRes{
				Code: err.Error(),
			})
			return
		}
		room.Manager.AddPlayer(p)

		s.Push("JoinRes", &proto_room.JoinRes{
			Room: &proto_room.Room{
				Id:    r.Id,
				Name:  r.Name,
				Users: r.GetUsers(),
			},
		})
	})
}
