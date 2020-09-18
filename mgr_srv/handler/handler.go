package handler

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2/metadata"
	proto_mgr "github.com/wolfplus2048/mcbeam-example/protos/mgr"
	proto_room "github.com/wolfplus2048/mcbeam-example/protos/room"
	"github.com/wolfplus2048/mcbeam-plus"

	"sync"
)

var (
	rooms  sync.Map
)
type room struct {
	id       string
	name     string
	serverId string
}
type Sub struct {
}

func (s *Sub) onRoomClose(ctx context.Context, not *proto_room.CloseRoomNot) {
	logger.Debugf("room %s closed", not.Rid)
	rooms.Delete(not.Rid)
}
type Handler struct {
	Client client.Client
}

func (h Handler) Init() {
}

func (h Handler) AfterInit() {
}

func (h Handler) BeforeShutdown() {
}

func (h Handler) Shutdown() {
}

func (h *Handler) GetRoomList(ctx context.Context, req *proto_mgr.GetRoomListReq) {
	s := mcbeam.GetSessionFromCtx(ctx)
	rsp := &proto_mgr.GetRoomListRes{
		Rooms: make([]*proto_mgr.Room, 0),
	}
	rooms.Range(func(_, v interface{}) bool {
		r := v.(*room)
		rsp.Rooms = append(rsp.Rooms, &proto_mgr.Room{
			Id:     r.id,
			Name:   r.name,
			Status: 0,
		})
		return true
	})
	s.Push("GetRoomListRes", rsp)

}
func (h *Handler) CreateRoom(ctx context.Context, req *proto_mgr.CreateRoomReq) {
	md, _ := metadata.FromContext(ctx)
	logger.Infof("Mgr CreateRoom:%s, remote ip:%s, local ip:%s", req.Name, md["Remote"], md["Local"])
	s := mcbeam.GetSessionFromCtx(ctx)
	arg := &proto_room.CreateRoomReq{Name: req.Name}
	rsp := &proto_room.CreateRoomRes{}
	err := mcbeam.RPC(context.Background(), h.Client, "room.handler.createroomrpc", arg, rsp)
	if err != nil {
		s.Push("createroom", &proto_mgr.CreateRoomRes{
			Code: err.Error(),
		})
		return
	}
	s.Push("CreateRoomRes", &proto_mgr.CreateRoomRes{
		Room: &proto_mgr.Room{
			Id:     rsp.Room.Id,
			Name:   rsp.Room.Name,
			Status: 0,
		},
		ServerId: rsp.ServerId,
	})
	rooms.Store(rsp.Room.Id, &room{
		id:       rsp.Room.Id,
		name:     rsp.Room.Name,
		serverId: rsp.ServerId,
	})
}
