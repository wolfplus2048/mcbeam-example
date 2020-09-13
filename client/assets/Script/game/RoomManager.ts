// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import Constants from "./data/Constants";
import CustomEventListener from "./data/CustomEventListener";
import GameData from "./data/GameData";
import {proto} from "./proto"
@ccclass
export default class RoomManager {
    private _rooms = new Map<string, proto.room.Room>()
    public get rooms() {
        return this._rooms
    }
    static _instance: RoomManager
    public static instance() {
        if (!this._instance) {
            this._instance = new RoomManager();
        }
        return this._instance
    }
    

}
