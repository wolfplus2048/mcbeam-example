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
    
    start() {
    
        CustomEventListener.on(Constants.EventName.JOIN_ROOM, this._joinRoom, this)
        starx.on("GetRoomListRes", (data)=>{
            let res = proto.mgr.GetRoomListRes.decode(data)
            for(let r of res.rooms) {
                this._rooms[r.id] = r
            }
        })
        starx.on("JoinRoomRes", (data)=>{
            let res = proto.room.JoinRes.decode(data)
            if(res.code.length <= 0) {
                GameData.instance().currRoom = res.room
            }
        })
    }
    getRoomList() {
        let req = proto.mgr.GetRoomListReq.create({})
        let buff = proto.mgr.GetRoomListReq.encode(req).finish()
        starx.notify("mgr.handler.GetRoomListReq", buff)
    }
    _joinRoom(...args: any[]) {
        let req = proto.room.JoinReq.create({id:args[0]})
        let buf = proto.room.JoinReq.encode(req).finish()
        starx.notify("room.handler.JoinRoomReq", buf)
    }
}
