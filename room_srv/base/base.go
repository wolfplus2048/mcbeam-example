package base

type BaseRoom interface {
	GetGamePlayers() []GamePlayer
	GetNextPlayer(p GamePlayer) GamePlayer
}
type GameRoom interface {
}
type BasePlayer interface {
	GetChairId() int
	GetUid() string
	Push(route string, payload interface{})
}
type GamePlayer interface {
}
