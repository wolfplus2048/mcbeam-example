// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { proto } from "../libs/proto";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameData  {
    static _instance: GameData = null
    public currRoom: proto.mgr.Room = null
    public static instance() {
        if(this._instance == null) {
            this._instance = new GameData()
        }
        return this._instance
    }
}
