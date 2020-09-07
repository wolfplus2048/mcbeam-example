package base

type BaseRoom interface {
	GetGamePlayers() []GamePlayer
	GetNextPlayer(p GamePlayer) GamePlayer
}
type GameRoom interface {
}
type BasePlayer interface {
}
type GamePlayer interface {
}
