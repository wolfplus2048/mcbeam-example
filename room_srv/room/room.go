package room

import (
	"errors"
	proto_room "githbu.com/wolfplus2048/mcbeam-example/protos/room"
	"github.com/google/uuid"
	"github.com/looplab/fsm"
)

type Room struct {
	Id      string
	Name    string
	players map[string]*Player
	fsm     *fsm.FSM
}

func newRoom(name string) *Room {
	id := uuid.New().String()
	r := &Room{Id: id,
		Name:    name,
		players: make(map[string]*Player),
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
	_, ok := r.players[player.uid]
	if ok {
		return errors.New("player already exists")
	}
	r.players[player.uid] = player
	player.SetRoom(r)
	return nil
}
func (r *Room) LeaveRoom(player *Player) error {
	_, ok := r.players[player.uid]
	if !ok {
		return errors.New("player not exists")
	}
	player.SetRoom(nil)
	delete(r.players, player.uid)
	return nil
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
