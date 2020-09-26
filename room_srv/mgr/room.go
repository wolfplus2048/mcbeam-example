package mgr

import (
	"errors"
	"gitee.com/microbeam/mcbeam-mind-mahjong/setting"
	"github.com/google/uuid"
	proto_room "github.com/wolfplus2048/mcbeam-example/protos/room"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
)

type Room struct {
	Id       string
	Name     string
	players  []*Player
	gameRoom base.GameRoom
}

func NewRoom(newRoom base.NewGameRoom, name string) *Room {
	id := uuid.New().String()
	r := &Room{Id: id,
		Name:    name,
		players: make([]*Player, setting.PlayerNum()),
	}
	r.gameRoom = newRoom()
	r.gameRoom.SetBaseRoom(r)

	return r
}

func (m *Room) Broadcast(route string, payload interface{}) {
	for _, p := range m.players {
		if p != nil {
			p.Push(route, payload)
		}
	}
}
func (r *Room) JoinRoom(player *Player) error {
	for i := 0; i < len(r.players); i++ {
		if r.players[i] == nil {
			r.players[i] = player
			player.SetRoom(r, i)
			return nil
		}
	}
	return errors.New("room full")
}
func (r *Room) LeaveRoom(player *Player) error {
	for i := 0; i < len(r.players); i++ {
		if r.players[i] == player {
			r.players[i] = nil
			return nil
		}
	}
	return errors.New("cant find player")
}
func (r *Room) GetUsers() []*proto_room.User {
	users := make([]*proto_room.User, 0)
	for _, u := range r.players {
		if u == nil {
			continue
		}
		users = append(users, &proto_room.User{
			Uid:      u.uid,
			Username: u.name,
		})
	}
	return users
}

func (r *Room) GetUserNum() int {
	return len(r.players)
}
func (r *Room) GetGamePlayers() []base.GamePlayer {
	plys := make([]base.GamePlayer, 0)
	for _, p := range r.players {
		if p == nil {
			continue
			//plys = append(plys, nil)
		}
		plys = append(plys, p.GetGamePlayer())
	}
	return plys
}
func (r *Room) GetNextPlayer(p base.GamePlayer) base.GamePlayer {
	k := 0
	find := false
	for i := 0; i < len(r.players); i++ {
		if r.players[k].gamePlayer == p {
			find = true
			break
		}
		k = (k + 1) % len(r.players)
	}
	if find {
		k = (k + 1) % len(r.players)
		p := r.players[k]
		if p != nil {
			return p.GetGamePlayer()
		}
	}
	return nil

}
func (r *Room) GetGameRoom() base.GameRoom {
	return r.gameRoom
}
