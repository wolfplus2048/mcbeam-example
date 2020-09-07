package room

import (
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-plus/session"
)

type Player struct {
	uid        string
	name       string
	session    *session.Session
	room       *Room
	gamePlayer *base.GamePlayer
}

func NewPlayer(s *session.Session, uid, name string) *Player {
	return &Player{
		uid:     uid,
		name:    name,
		session: s,
	}
}
func (p *Player) UID() string {
	return p.uid
}
func (p *Player) SetRoom(r *Room) {
	p.room = r
}
func (p *Player) GetRoom() *Room {
	return p.room
}
func (p *Player) GetGamePlayer() base.GamePlayer {
	return p.gamePlayer
}
