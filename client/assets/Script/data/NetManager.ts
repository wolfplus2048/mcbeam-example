import CustomEventListener from "../common/CustomEventListener";
import UIManager from "../common/UIManager";
import { helloworld } from "../libs/helloworld";
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

const {ccclass, property} = cc._decorator;2111

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

        // starx.init({host:"mars.mcbeam.cc", port:"80", path:"/websocket"}, (data)=>{
        //     console.log("connected to server")
        // })
        starx.init({host:"127.0.0.1", port:"3250", path:""}, (data)=>{
            console.log("connected to server")
        })
        starx.on("Notify", (ret)=>{
            let rsp = helloworld.Response.decode(ret)
            console.log("Notify", rsp)
        })
        starx.on("SysError", (ret)=>{
            let err = helloworld.Error.decode(ret)
            console.log("SysError:", err)
            UIManager.showDialog("dialogTip", null, err.code+err.detail)
        })
        starx.on("GetRoomListRes", (data)=>{
            let res = proto.mgr.GetRoomListRes.decode(data)
            console.log(res)
            CustomEventListener.dispatchEvent(Constants.EventName.UPDATE_ROOM_LIST, "set", res.rooms)
        })
        starx.on("JoinRes", (data)=>{
            let res = proto.room.JoinRes.decode(data)
            console.log(res)
            if(res.code.length <= 0) {
                GameData.instance().currRoom = res.room
            }
            CustomEventListener.dispatchEvent(Constants.EventName.JOIN_ROOM_RESPONSE, res.code)
        })
        starx.on("CreateRoomRes", (data)=>{
            let res = proto.mgr.CreateRoomRes.decode(data)
            console.log(res)
            CustomEventListener.dispatchEvent(Constants.EventName.UPDATE_ROOM_LIST, "add", res)
        })
        starx.on("CloseRoomNot", (data)=>{
            let not = proto.mgr.CloseRoomNot.decode(data)
            console.log(not)
            CustomEventListener.dispatchEvent(Constants.EventName.UPDATE_ROOM_LIST, "del", not)
        })
        starx.on("LoginRes", (ret) => {
             let res = proto.auth.LoginRes.decode(ret)
            console.log(res)
            if(res.code.length <= 0) {
                PlayerData.instance().init(res.uid, res.username)
            }
            CustomEventListener.dispatchEvent(Constants.EventName.LOGIN_RESPONSE, res.code)
        })
    }
    public calltest(username:string) {
        let req = helloworld.Request.create({name:username})
        let buff = helloworld.Request.encode(req).finish()
        starx.request("helloworld.Helloworld.Call", buff, (ret)=>{
            let rsp = helloworld.Response.decode(ret)
            console.log(rsp)
        })
    }
    public login(username: string) {
        let req = proto.auth.LoginReq.create({username: username})
        let buff = proto.auth.LoginReq.encode(req).finish()
        starx.request("auth.Handler.Login", buff, (ret)=>{
            let res = proto.auth.LoginRes.decode(ret)
            console.log(res)
            if(res.code.length <= 0) {
                PlayerData.instance().init(res.uid, res.username)
            }
            CustomEventListener.dispatchEvent(Constants.EventName.LOGIN_RESPONSE, res.code)
        })
        //starx.notify("auth.Handler.Login", buff)
    }
    public getRoomList() {
        let req = proto.mgr.GetRoomListReq.create({})
        let buff = proto.mgr.GetRoomListReq.encode(req).finish()
        starx.notify("mgr.Handler.GetRoomList", buff)
    }
    public joinRoom(id: string) {
        let req = proto.room.JoinReq.create({id:id})
        let buf = proto.room.JoinReq.encode(req).finish()
        starx.notify("room.Handler.JoinRoom", buf)
    }
    public createRoom(name: string) {
        let req = proto.mgr.CreateRoomReq.create({name: name})
        let buff = proto.mgr.CreateRoomReq.encode(req).finish()
        starx.notify("mgr.Handler.CreateRoom", buff)
    }
    public ready() {
        let req = proto.mj.ReadyReq.create({})
        let buff = proto.mj.ReadyReq.encode(req).finish()
        starx.notify("room.MJHandler.Ready", buff)
    }
}
