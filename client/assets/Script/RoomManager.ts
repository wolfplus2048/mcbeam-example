// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import {proto} from "./proto"
@ccclass
export default class RoomManager {
    public rooms = new Map<string, proto.room.Room>()
    static _instance: RoomManager
    public static instance() {
        if (!this._instance) {
            this._instance = new RoomManager();
        }
        return this._instance
    }
    start() {
        
    }
    public getRoomList() {

    }
}
