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
	room.Manager.LeaveRoom(arg.Username)
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

func (h *Handler) CreateRoom(ctx context.Context, req *proto_room.CreateRoomReq) (*proto_room.CreateRoomRes, error) {
	logger.Debugf("crateRoom %s", req.Name)
	r, err := room.Manager.CreateRoom(req.Name)
	if err != nil {
		return nil, err
	}
	res := &proto_room.CreateRoomRes{
		Code: "",
		Room: &proto_room.Room{
			Id:   r.Id,
			Name: r.Name,
		},
		ServerId: h.Service.Options().Server.Options().Name + "-" + h.Service.Options().Server.Options().Id,
	}
	return res, nil
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
	u := &room.User{
		Uid:     s.UID(),
		Name:    string(res[0].Value),
		Session: s,
	}
	err = room.Manager.JoinRoom(req.Id, u)
	if err != nil {
		s.Push("JoinRes", &proto_room.JoinRes{
			Code: "can not join room",
		})
		return
	}
	s.Push("JoinRes", &proto_room.JoinRes{
		Room: &proto_room.Room{
			Id:    u.Room.Id,
			Name:  u.Room.Name,
			Users: room.Manager.GetUsers(u.Room.Id),
		},
	})
}
