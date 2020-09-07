package room

import (
	"errors"
	"github.com/google/uuid"
	"github.com/looplab/fsm"
	proto_room "github.com/wolfplus2048/mcbeam-example/protos/room"
	"github.com/wolfplus2048/mcbeam-example/room_srv/base"
)

type Room struct {
	Id       string
	Name     string
	players  []*Player
	gameRoom base.GameRoom
	fsm      *fsm.FSM
}

func newRoom(name string) *Room {
	id := uuid.New().String()
	r := &Room{Id: id,
		Name:    name,
		players: make([]*Player, 4),
	}
	r.fsm = fsm.NewFSM(
		"closed",
		fsm.Events{
			{Name: "start", Src: []string{"closing"}, Dst: "starting"},
		},
		fsm.Callbacks{
			"enter_started": func(e *fsm.Event) {},
		},
	)
	return r
}
func (r *Room) JoinRoom(player *Player) error {

	for i := 0; i < len(r.players); i++ {
		if r.players[i] == nil {
			r.players[i] = player
			player.SetRoom(r)
			return nil
		}
	}

	return errors.New("room full")

}
func (r *Room) LeaveRoom(player *Player) error {
	for i := 0; i < len(r.players); i++ {
		if r.players[i] == player {
			r.players[i] = nil
			player.SetRoom(nil)
			return nil
		}
	}
	return errors.New("cant find player")

}
func (r *Room) GetUsers() []*proto_room.User {
	users := make([]*proto_room.User, 0)
	for _, u := range r.players {
		users = append(users, &proto_room.User{
			Uid:      u.uid,
			Username: u.name,
		})
	}
	return users
}
func (r *Room) StartGame() {

}
func (r *Room) GetUserNum() int {
	return len(r.players)
}
func (r *Room) GetGamePlayers() []base.GamePlayer {
	plys := make([]base.GamePlayer, 0)
	for _, p := range r.players {
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
