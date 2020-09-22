package logic

import "gitee.com/microbeam/mcbeam-mind-mahjong/win"

func QingYiSe() win.CanWinFn {
	return func(handCards, showCards []int) bool {
		t := 0
		for _, c := range handCards {
			if n := c % 10; t != 0 && n != t {
				return false
			}
		}
		return true
	}
}
