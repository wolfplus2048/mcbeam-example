package base

import (
	"context"
)

type PlayerKey struct{}

type BaseRoom interface {
	GetGamePlayers() []GamePlayer
	GetNextPlayer(p GamePlayer) GamePlayer
	GetGameRoom() GameRoom
}
type BasePlayer interface {
	GetChairId() int
	GetUid() string
	Push(route string, payload interface{})
	GetGamePlayer() GamePlayer
}
type GameRoom interface {
	SetBaseRoom(room BaseRoom)
}
type GamePlayer interface {
	SetBasePlayer(ply BasePlayer)
	SetGameRoom(r GameRoom)
}

func GetPlayerFromSession(ctx context.Context) BasePlayer {
	p := ctx.Value(PlayerKey{})
	return p.(BasePlayer)
}

type NewGamePlayer func() GamePlayer
type NewGameRoom func() GameRoom
