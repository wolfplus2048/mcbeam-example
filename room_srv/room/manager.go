package room

import (
	"errors"
	"fmt"
	proto_room "githbu.com/wolfplus2048/mcbeam-example/protos/room"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/session"
)

type User struct {
	Uid     string
	Name    string
	Session *session.Session
	Room    *Room
}
type Room struct {
	Id    string
	Name  string
	users map[string]*User
}
type LogicFn func()

type manager struct {
	rooms   map[string]*Room
	users   map[string]*User
	chLogic chan LogicFn
	exit    chan struct{}
}

func newManager() *manager {
	m := &manager{
		rooms:   make(map[string]*Room),
		users:   make(map[string]*User),
		chLogic: make(chan LogicFn, 10),
		exit:    make(chan struct{}),
	}
	go m.loop()
	return m
}
func (m *manager) CreateRoom(name string) (*Room, error) {
	ret := make(chan *Room)
	m.chLogic <- func() {
		id := uuid.New().String()
		r := &Room{Id: id,
			Name:  name,
			users: make(map[string]*User),
		}
		m.rooms[id] = r
		ret <- r
	}

	return <-ret, nil
}
func (m *manager) GetRoom(id string) *Room {
	ret := make(chan *Room)
	m.chLogic <- func() {
		r, ok := m.rooms[id]
		if ok {
			ret <- r
			return
		}
		ret <- nil
	}
	return <-ret
}

func (m *manager) loop() {
ExitLoop:
	for {
		select {
		case <-m.exit:
			logger.Debugf("<- exit")
			break ExitLoop
		case fn := <-m.chLogic:
			fn()
		}
	}
	logger.Debugf("exit Room manager loop")
}
func (m *manager) JoinRoom(id string, user *User) error {
	ret := make(chan error)
	m.chLogic <- func() {
		r, ok := m.rooms[id]
		if !ok {
			ret <- fmt.Errorf("Room:%s not exists", id)
			return

		}
		_, ok = m.users[user.Uid]
		if ok {
			ret <- errors.New("user already exists")
			return
		}
		m.users[user.Uid] = user
		r.users[user.Uid] = user
		user.Room = r
		ret <- nil
		logger.Debugf("JoinRoom %s", user.Uid)
	}
	return <-ret
}
func (m *manager) LeaveRoom(uid string) error {
	ret := make(chan error)
	m.chLogic <- func() {
		u, ok := m.users[uid]
		if !ok {
			ret <- errors.New("user not exists")
			return

		}
		r := u.Room
		delete(r.users, uid)
		delete(m.users, uid)
		if len(r.users) == 0 {
			delete(m.rooms, u.Room.Id)
			logger.Debugf("remove room:%s", u.Room.Id)
		}
		ret <- nil
		logger.Debugf("LeaveRoom %s", uid)

	}
	return <-ret
}
func (m *manager) Chat(uid string, content string) {
	m.chLogic <- func() {
		u, ok := m.users[uid]
		if !ok {
			return
		}
		r := u.Room
		for _, u := range r.users {
			u.Session.Push("chat", content)
		}
	}
}
func (m *manager) GetUsers(id string) []*proto_room.User {
	ret := make(chan []*proto_room.User)
	m.chLogic <- func() {
		r, ok := m.rooms[id]
		if !ok {
			ret <- []*proto_room.User{}
			return

		}
		users := make([]*proto_room.User, 0)
		for _, u := range r.users {
			users = append(users, &proto_room.User{
				Uid:      u.Uid,
				Username: u.Name,
			})
		}
		ret <- users
	}
	return <-ret
}

var (
	Manager *manager = newManager()
)
