package manager

import (
	"context"
	"errors"
	"github.com/micro/go-micro/v2/server"
	"github.com/wolfplus2048/mcbeam-example/room_srv/logic"
	"github.com/wolfplus2048/mcbeam-example/room_srv/room"
	"github.com/wolfplus2048/mcbeam-plus"
)

type manager struct {
	rooms   map[string]*room.Room
	players map[string]*room.Player
}

func WrapSession() server.HandlerWrapper {
	return func(h server.HandlerFunc) server.HandlerFunc {
		return func(ctx context.Context, req server.Request, rsp interface{}) error {
			s := mcbeam.GetSessionFromCtx(ctx)
			ply, ok := Manager.FindPlayer(s.UID())
			if ok {
				ctx = context.WithValue(ctx, "player", ply)
			}
			return h(ctx, req, rsp)
		}
	}
}
func newManager() *manager {
	m := &manager{
		rooms:   make(map[string]*room.Room),
		players: make(map[string]*room.Player),
	}
	return m
}

func (m *manager) CreateRoom(name string) (*room.Room, error) {
	r := room.NewRoom(name)
	m.rooms[r.Id] = r

	return r, nil
}
func (m *manager) RemoveRoom(rid string) error {
	r, ok := m.rooms[rid]
	if !ok {
		return errors.New("room not exists")
	}
	if r.GetUserNum() != 0 {
		return errors.New("room not empty")
	}
	delete(m.rooms, rid)
	return nil
}
func (m *manager) GetRoom(rid string) (*room.Room, bool) {
	r, ok := m.rooms[rid]
	return r, ok
}
func (m *manager) AddPlayer(p *room.Player) error {
	_, ok := m.players[p.GetUid()]
	if ok {
		return errors.New("player already exists")
	}
	m.players[p.GetUid()] = p
	return nil
}
func (m *manager) FindPlayer(uid string) (*room.Player, bool) {
	p, ok := m.players[uid]
	return p, ok
}
func (m *manager) RemovePlayer(uid string) error {
	p, ok := m.FindPlayer(uid)
	if !ok {
		return nil
	}
	r := p.GetRoom()
	if r != nil {
		r.LeaveRoom(p)
	}
	delete(m.players, uid)
	return nil
}

func GetGamePlayerFromCtx(ctx context.Context) *logic.MJPlayer {
	s := mcbeam.GetSessionFromCtx(ctx)
	p, ok := Manager.FindPlayer(s.UID())
	if !ok {
		return nil
	}
	pg := p.GetGamePlayer()
	return pg.(*logic.MJPlayer)
}

var (
	Manager *manager = newManager()
)
