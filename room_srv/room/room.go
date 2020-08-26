package room

import (
	"errors"
	proto_room "githbu.com/wolfplus2048/mcbeam-example/protos/room"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/session"
	"sync"
)


var (
	rooms sync.Map
)
type User struct {
	Uid     string
	Name    string
	Session *session.Session
}
type LogicFn func()
type Room struct {
	Id      string
	Name    string
	users   map[string]*User
	chLogic chan LogicFn
	exit    chan struct{}
}

func New(name string) (*Room, error) {
	id := uuid.New().String()
	r := &Room{Id: id,
		Name:    name,
		users:   make(map[string]*User),
		chLogic: make(chan LogicFn, 10),
		exit:    make(chan struct{}),
	}
	rooms.Store(r.Id, r)
	go r.loop()
	return r, nil
}
func GetRoom(id string) *Room {
	r, ok := rooms.Load(id)
	if ok {
		return r.(*Room)
	}
	return nil
}

func (r *Room) RemoveRoom()  {
	rooms.Delete(r.Id)
	close(r.exit)
}
func (r *Room) loop() {
	ExitLoop:
	for {
		select {
		case <-r.exit:
			logger.Debugf("<- exit")
			break ExitLoop
		case fn := <-r.chLogic:
			fn()
		}
	}
	logger.Debugf("exit room loop %d", r.Id)
}
func (r *Room) JoinRoom(user *User) error {
	ret := make(chan error)
	fn := func() {
		if _, ok := r.users[user.Uid]; ok {
			ret <- errors.New("user already exists")
		}
		r.users[user.Uid] = user
		ret <- nil
		logger.Debugf("JoinRoom %s", user.Uid)
	}
	r.chLogic <- fn
	return <- ret
}
func (r *Room) LeaveRoom(uid string) error {
	ret := make(chan error)
	r.chLogic <- func() {
		if _, ok := r.users[uid]; !ok {
			ret <- errors.New("user not exists")
		}
		delete(r.users, uid)
		if len(r.users) == 0 {
			r.RemoveRoom()
		}
		ret <- nil
		logger.Debugf("LeaveRoom %s, %d", uid, len(r.users))

	}
	return <- ret
}
func (r *Room) Chat(uid string, content string) {
	r.chLogic <- func() {
		for _, u := range r.users {
			u.Session.Push("chat", content)
		}
	}
}
func (r *Room) GetUsers() []*proto_room.User {
	ret := make(chan []*proto_room.User)
	r.chLogic <- func() {
		users := make([]*proto_room.User, 0)
		for _, u := range r.users {
			users = append(users, &proto_room.User{
				Uid:      u.Uid,
				Username: u.Name,
			})
		}
		ret <- users
	}
	return <- ret
}
