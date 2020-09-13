// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { proto } from "../libs/proto";
import Constants from "./Constants";
import CustomEventListener from "./CustomEventListener";

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
            CustomEventListener.dispatchEvent(Constants.EventName.LOGIN_RESPONSE, proto.gate.LoginRes.decode(ret))
        })
    }
    public login(username: string) {
        let req = proto.gate.LoginReq.create({username: username})
        let buff = proto.gate.LoginReq.encode(req).finish()
        starx.notify("login.handler.LoginReq", buff)
    }
}
