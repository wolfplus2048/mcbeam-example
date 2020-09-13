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

const {ccclass, property} = cc._decorator;

@ccclass
export default class NetManager {
    static instance: NetManager = null
    public static instance() {
        if(this.instance == null) {
            this.instance = new NetManager()
        }
        return this.instance
    }
    public init() {
        starx.init({host:"172.0.0.1", port:":3250", path:"/ws"}, (data)=>{
            console.log("connected to server")
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
    public login(username: string) {
        let req = proto.gate.LoginReq.create({username: username})
        let buff = proto.gate.LoginReq.encode(req).finish()
        starx.notify("login.handler.LoginReq", buff)
    }
    public getRoomList() {
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
