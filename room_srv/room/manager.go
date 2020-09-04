package room

import (
	"errors"
	"github.com/micro/go-micro/v2/logger"
	"runtime/debug"
)

type LogicFn func()

type manager struct {
	rooms   map[string]*Room
	players map[string]*Player
	chLogic chan LogicFn
	exit    chan struct{}
}

func newManager() *manager {
	m := &manager{
		rooms:   make(map[string]*Room),
		players: make(map[string]*Player),
		chLogic: make(chan LogicFn, 10),
		exit:    make(chan struct{}),
	}
	go m.loop()
	return m
}
func (m *manager) Stop() {
	close(m.exit)
}
func (m *manager) CreateRoom(name string) (*Room, error) {
	r := newRoom(name)
	m.rooms[r.Id] = r

	return r, nil
}
func (m *manager) RemoveRoom(rid string) error {
	r, ok := m.rooms[rid]
	if !ok {
		return errors.New("room not exists")
	}
	if len(r.players) != 0 {
		return errors.New("room not empty")
	}
	delete(m.rooms, rid)
	return nil
}
func (m *manager) GetRoom(rid string) (*Room, bool) {
	r, ok := m.rooms[rid]
	return r, ok
}
func (m *manager) AddPlayer(p *Player) error {
	p, ok := m.players[p.uid]
	if ok {
		return errors.New("player already exists")
	}
	m.players[p.uid] = p
	return nil
}
func (m *manager) FindPlayer(uid string) (*Player, bool) {
	p, ok := m.players[uid]
	return p, ok
}
func (m *manager) RemovePlayer(uid string) error {
	delete(m.players, uid)
	return nil
}
func (m *manager) loop() {
ExitLoop:
	for {
		select {
		case <-m.exit:
			logger.Debugf("<- exit")
			break ExitLoop
		case fn := <-m.chLogic:
			run := func() {
				defer func() {
					if rec := recover(); rec != nil {
						// Try to use logger from context here to help trace error cause
						logger.Errorf("panic - manager/loop: %v", rec)
						logger.Debugf("%s", debug.Stack())
					}
				}()
				fn()
			}
			run()
		}
	}
	logger.Debugf("exit room manager loop")
}

func (m *manager) Run(fn func()) {
	m.chLogic <- fn
}

var (
	Manager *manager = newManager()
)
