package base

import (
	"github.com/micro/go-micro/v2/logger"
	"runtime/debug"
)

type LogicFn func()

type Process struct {
	chLogic chan LogicFn
	exit    chan chan error
}

func newProcess() *Process {
	return &Process{
		chLogic: make(chan LogicFn, 10),
		exit:    make(chan chan error),
	}
}
func (m *Process) Start() {
	go m.loop()
}
func (m *Process) Stop() {
	ch := make(chan error)
	m.exit <- ch
	<-ch
	close(m.exit)
}
func (m *Process) loop() {
	var ch chan error
ExitLoop:
	for {
		select {
		case ch = <-m.exit:
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
	ch <- nil
	logger.Debugf("exit room manager loop")
}

func (m *Process) Run(fn func()) {
	m.chLogic <- fn
}

var (
	DefaultProcess = newProcess()
)

func Start() {
	DefaultProcess.Start()
}
func Stop() {
	DefaultProcess.Stop()
}
func Run(fn func()) {
	DefaultProcess.Run(fn)
}
