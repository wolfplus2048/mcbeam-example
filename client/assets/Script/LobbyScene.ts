// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import {proto} from "./proto"
import { RSA_PKCS1_OAEP_PADDING } from "constants";

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    roomName: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        starx.on('CreateRoomRes', (data)=>{
            let rsp = proto.mgr.CreateRoomRes.decode(data)
            cc.log(rsp)

            if(rsp.code.length <= 0){
                let req = proto.room.JoinReq.create({id:rsp.room.id})
                let buff = proto.room.JoinReq.encode(req).finish()
                starx.notify(rsp.serverId + ".room.handler.joinroom", buff)
            }
        })
        starx.on('JoinRes', (data)=>{
            let rsp = proto.room.JoinRes.decode(data)
            cc.log(rsp)
            if(rsp.code.length == 0) {
                cc.director.loadScene("room")
            }
        })
    }
    createRoom() {
        let req = proto.mgr.CreateRoomReq.create({name:this.roomName.string})
        let buf = proto.mgr.CreateRoomReq.encode(req).finish()
        starx.notify("mgr.handler.createroom", buf)
    }
    // update (dt) {}
}
