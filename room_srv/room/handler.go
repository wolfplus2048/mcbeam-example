package room

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/store"
	"github.com/wolfplus2048/mcbeam-example/protos/room"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-example/room_srv/manager"
	"github.com/wolfplus2048/mcbeam-plus"
	proto_mcbeam "github.com/wolfplus2048/mcbeam-plus/protos"
)

type Sub struct {
	service micro.Service
}

func (s *Sub) Process(ctx context.Context, arg *proto_mcbeam.SessionClose) error {
	logger.Debugf("uid %s closed", arg.Uid)

	base.Run(func() {
		p, ok := manager.Manager.FindPlayer(arg.Uid)
		if !ok {
			return
		}
		r := p.GetRoom()
		r.LeaveRoom(p)
		manager.Manager.RemovePlayer(p.GetUid())
		if r.GetUserNum() == 0 {
			manager.Manager.RemoveRoom(r.Id)
			c := s.service.Client()
			m := c.NewMessage("room.close", &proto_room.CloseRoomNot{Rid: r.Id})
			c.Publish(ctx, m)
		}
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

	base.Run(func() {
		logger.Debugf("crateRoom %s", req.Name)
		r, err := manager.Manager.CreateRoom(req.Name)
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

	base.Run(func() {
		p, ok := manager.Manager.FindPlayer(s.UID())
		if ok {
			s.Push("JoinRes", &proto_room.JoinRes{
				Code: "player already exists",
			})
			return
		}
		p = NewPlayer(s, s.UID(), string(res[0].Value))
		r, ok := manager.Manager.GetRoom(req.Id)
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
		manager.Manager.AddPlayer(p)

		s.Push("JoinRes", &proto_room.JoinRes{
			Room: &proto_room.Room{
				Id:    r.Id,
				Name:  r.Name,
				Users: r.GetUsers(),
			},
		})
	})
}
