// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import {proto} from "../proto"
@ccclass
export default class LobbyUI extends cc.Component {

    @property(cc.ScrollView)
    roomList: cc.ScrollView = null;

    @property(cc.Label)
    roomName: cc.Label = null

    start() {
        starx.on("CreateRoomRes", (data)=>{
            
        })
    }
    createRoom() {
        let req = proto.room.CreateRoomReq.create({name: this.roomName.string})
        let buff = proto.room.CreateRoomReq.encode(req).finish()
        starx.notify("CreateRoomReq", buff)
    }
}
