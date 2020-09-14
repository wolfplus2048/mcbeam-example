// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { proto } from "../libs/proto";
import Constants from "./Constants";
import CustomEventListener from "./CustomEventListener";
import PlayerData from "./PlayerData";
import GameData from "./GameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NetManager {
    static _instance: NetManager = null
    public static instance() {
        if(this._instance == null) {
            this._instance = new NetManager()
        }
        return this._instance
    }
    public init() {
        starx.init({host:"127.0.0.1", port:"3250", path:"/ws"}, (data)=>{
            console.log("connected to server")
        })
        starx.on("SysError", (ret)=>{
            let err = proto.gate.Error.decode(ret)
            console.log(err)
        })
        starx.on("LoginRes", (ret)=>{
            let res = proto.gate.LoginRes.decode(ret)
            if(res.code.length <= 0) {
                PlayerData.instance().init(res.uid, res.username)
            }
            CustomEventListener.dispatchEvent(Constants.EventName.LOGIN_RESPONSE, res.code)
        })
        starx.on("GetRoomListRes", (data)=>{
            let res = proto.mgr.GetRoomListRes.decode(data)
            GameData.instance().roomList = res.rooms
        })
        starx.on("JoinRoomRes", (data)=>{
            let res = proto.room.JoinRes.decode(data)
            if(res.code.length <= 0) {
                GameData.instance().currRoom = res.room
            }
            CustomEventListener.dispatchEvent(Constants.EventName.JOIN_ROOM_RESPONSE, res.code)
        })
    }
    public login(username: string) {
        let req = proto.gate.LoginReq.create({username: username})
        let buff = proto.gate.LoginReq.encode(req).finish()
        starx.notify("gate.auth.login2", buff)
    }
    public getRoomList() {
        if(GameData.instance().roomList) {
            return
        }
        let req = proto.mgr.GetRoomListReq.create({})
        let buff = proto.mgr.GetRoomListReq.encode(req).finish()
        starx.notify("mgr.handler.GetRoomListReq", buff)
    }
    public joinRoom(...args: any[]) {
        let req = proto.room.JoinReq.create({id:args[0]})
        let buf = proto.room.JoinReq.encode(req).finish()
        starx.notify("room.handler.JoinRoomReq", buf)
    }
}
