package mgr

import (
	"context"
	"errors"
	"github.com/micro/go-micro/v2/server"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-plus"
)

type manager struct {
	rooms   map[string]*Room
	players map[string]*Player
}

func WrapSession() server.HandlerWrapper {
	return func(h server.HandlerFunc) server.HandlerFunc {
		return func(ctx context.Context, req server.Request, rsp interface{}) error {
			s := mcbeam.GetSessionFromCtx(ctx)
			ply, ok := Manager.FindPlayer(s.UID())
			if ok {
				ctx = context.WithValue(ctx, base.PlayerKey{}, ply)
			}
			return h(ctx, req, rsp)
		}
	}
}
func newManager() *manager {
	m := &manager{
		rooms:   make(map[string]*Room),
		players: make(map[string]*Player),
	}
	return m
}

func (m *manager) AddRoom(r *Room) error {
	if _, ok := m.rooms[r.Id]; ok {
		return errors.New("room already exists")
	}
	m.rooms[r.Id] = r

	return nil
}
func (m *manager) RemoveRoom(rid string) error {
	r, ok := m.rooms[rid]
	if !ok {
		return errors.New("mgr not exists")
	}
	if r.GetUserNum() != 0 {
		return errors.New("mgr not empty")
	}
	delete(m.rooms, rid)
	return nil
}
func (m *manager) GetRoom(rid string) (*Room, bool) {
	r, ok := m.rooms[rid]
	return r, ok
}
func (m *manager) AddPlayer(p *Player) error {
	_, ok := m.players[p.GetUid()]
	if ok {
		return errors.New("player already exists")
	}
	m.players[p.GetUid()] = p
	return nil
}
func (m *manager) FindPlayer(uid string) (*Player, bool) {
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

var (
	Manager *manager = newManager()
)
