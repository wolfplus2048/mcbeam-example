import CustomEventListener from "../common/CustomEventListener";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { proto } from "../libs/proto";
import Constants from "./Constants";
import GameData from "./GameData";
import PlayerData from "./PlayerData";

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
            let err = proto.auth.Error.decode(ret)
            console.log(err)
        })
        starx.on("LoginRes", (ret)=>{
            let res = proto.auth.LoginRes.decode(ret)
            console.log(res)
            if(res.code.length <= 0) {
                PlayerData.instance().init(res.uid, res.username)
            }
            CustomEventListener.dispatchEvent(Constants.EventName.LOGIN_RESPONSE, res.code)
        })
        starx.on("GetRoomListRes", (data)=>{
            let res = proto.mgr.GetRoomListRes.decode(data)
            console.log(res)
            GameData.instance().roomList = res.rooms
        })
        starx.on("JoinRoomRes", (data)=>{
            let res = proto.room.JoinRes.decode(data)
            console.log(res)
            if(res.code.length <= 0) {
                GameData.instance().currRoom = res.room
            }
            CustomEventListener.dispatchEvent(Constants.EventName.JOIN_ROOM_RESPONSE, res.code)
        })
    }
    public login(username: string) {
        let req = proto.auth.LoginReq.create({username: username})
        let buff = proto.auth.LoginReq.encode(req).finish()
        starx.notify("auth.auth.login", buff)
    }
    public getRoomList() {
        if(GameData.instance().roomList) {
            return
        }
        let req = proto.mgr.GetRoomListReq.create({})
        let buff = proto.mgr.GetRoomListReq.encode(req).finish()
        starx.notify("mgr.handler.getroomlist", buff)
    }
    public joinRoom(...args: any[]) {
        let req = proto.room.JoinReq.create({id:args[0]})
        let buf = proto.room.JoinReq.encode(req).finish()
        starx.notify("room.handler.JoinRoom", buf)
    }
}
