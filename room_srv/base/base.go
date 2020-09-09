package base

type BaseRoom interface {
	GetGamePlayers() []GamePlayer
	GetNextPlayer(p GamePlayer) GamePlayer
}
type GameRoom interface {
}
type BasePlayer interface {
	GetChairID() int
	Push(route string, payload interface{})
}
type GamePlayer interface {
}
