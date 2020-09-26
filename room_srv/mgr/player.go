package mgr

import (
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
	"github.com/wolfplus2048/mcbeam-example/room_srv/logic"
	"github.com/wolfplus2048/mcbeam-plus/session"
)

type Player struct {
	uid        string
	name       string
	session    *session.Session
	room       *Room
	chairId    int
	gamePlayer base.GamePlayer
}

func NewPlayer(newPlayer base.NewGamePlayer, s *session.Session, uid, name string) *Player {
	ply := &Player{
		gamePlayer: newPlayer(),
		uid:        uid,
		name:       name,
		session:    s,
	}
	ply.gamePlayer = logic.NewMJPlayer()
	ply.gamePlayer.SetBasePlayer(ply)
	return ply
}
func (p *Player) GetUid() string {
	return p.uid
}
func (p *Player) Push(route string, payload interface{}) {
	p.session.Push(route, payload)
}
func (p *Player) SetRoom(r *Room, id int) {
	p.room = r
	p.gamePlayer.SetGameRoom(r.GetGameRoom())
	p.chairId = id
}
func (p *Player) GetRoom() *Room {
	return p.room
}
func (p *Player) GetGamePlayer() base.GamePlayer {
	return p.gamePlayer
}
func (p *Player) GetChairId() int {
	return p.chairId
}
