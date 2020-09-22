package mgr

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/store"
	"github.com/wolfplus2048/mcbeam-example/protos/room"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-plus"
	proto_mcbeam "github.com/wolfplus2048/mcbeam-plus/protos"
)

type Sub struct {
	service micro.Service
}

func (s *Sub) Process(ctx context.Context, arg *proto_mcbeam.SessionClose) error {
	logger.Debugf("uid %s closed", arg.Uid)

	base.Run(func() {
		p, ok := Manager.FindPlayer(arg.Uid)
		if !ok {
			return
		}
		r := p.GetRoom()
		r.LeaveRoom(p)
		Manager.RemovePlayer(p.GetUid())
		if r.GetUserNum() == 0 {
			Manager.RemoveRoom(r.Id)
			c := s.service.Client()
			m := c.NewMessage("mgr.close", &proto_room.CloseRoomNot{Rid: r.Id})
			c.Publish(ctx, m)
		}
	})
	return nil
}

type Handler struct {
	service   micro.Service
	newPlayer base.NewGamePlayer
	newRoom   base.NewGameRoom
}

func NewHandler(newPlayer base.NewGamePlayer, newRoom base.NewGameRoom, service micro.Service) *Handler {
	return &Handler{
		service:   service,
		newPlayer: newPlayer,
		newRoom:   newRoom,
	}
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
		r := NewRoom(h.newRoom, req.Name)
		err := Manager.AddRoom(r)
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
			ServerId: h.service.Options().Server.Options().Name + "-" + h.service.Options().Server.Options().Id,
		}
		ret <- nil
	})
	return res, <-ret
}
func (h *Handler) JoinRoom(ctx context.Context, req *proto_room.JoinReq) {
	s := mcbeam.GetSessionFromCtx(ctx)
	st := h.service.Options().Store
	res, err := st.Read(s.UID(), store.ReadFrom("cache", "user"))
	if err != nil || len(res) < 1 {
		s.Push("JoinRes", &proto_room.JoinRes{
			Code: "invalidate user",
		})
		return
	}

	base.Run(func() {
		p, ok := Manager.FindPlayer(s.UID())
		if ok {
			s.Push("JoinRes", &proto_room.JoinRes{
				Code: "player already exists",
			})
			return
		}
		p = NewPlayer(h.newPlayer, s, s.UID(), string(res[0].Value))
		r, ok := Manager.GetRoom(req.Id)
		if !ok {
			s.Push("JoinRes", &proto_room.JoinRes{
				Code: "mgr not exists",
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
		Manager.AddPlayer(p)

		s.Push("JoinRes", &proto_room.JoinRes{
			Room: &proto_room.Room{
				Id:    r.Id,
				Name:  r.Name,
				Users: r.GetUsers(),
			},
		})
	})
}
