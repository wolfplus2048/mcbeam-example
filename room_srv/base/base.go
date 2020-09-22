package base

type BaseRoom interface {
	GetGamePlayers() []GamePlayer
	GetNextPlayer(p GamePlayer) GamePlayer
}
type BasePlayer interface {
	GetChairId() int
	GetUid() string
	Push(route string, payload interface{})
}
type GameRoom interface {
}
type GamePlayer interface {
}
