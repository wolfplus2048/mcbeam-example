// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import Constants from "../data/Constants";
import CustomEventListener from "../data/CustomEventListener";
import GameData from "../data/GameData";
import { proto } from "../libs/proto";
import NetManager from "../data/NetManager";
@ccclass
export default class LobbyUI extends cc.Component {

    @property(cc.Prefab)
    itemPrefab: cc.Prefab

    @property(cc.ScrollView)
    roomList: cc.ScrollView = null;

    @property(cc.Label)
    roomName: cc.Label = null

    start() {
        if(GameData.instance().roomList) {
            GameData.instance().roomList.forEach((value, key) => {
                let item = cc.instantiate(this.itemPrefab)
                item.getComponent("Item").init(value.name, "1/4", "playing")
                this.roomList.content.addChild(item)
            })
        } else {
            NetManager.instance().getRoomList()
        }

    }
    onEnable() {
        CustomEventListener.on(Constants.EventName.UPDATE_ROOM_LIST, this.updateRoomList, this)
        CustomEventListener.on(Constants.EventName.JOIN_ROOM, this.joinRoom, this)
        CustomEventListener.on(Constants.EventName.JOIN_ROOM_RESPONSE, this.onJoinRoom, this)
    }
    onDisable() {
        CustomEventListener.off(Constants.EventName.UPDATE_ROOM_LIST, this.updateRoomList, this)
    }
    private updateRoomList(data: proto.mgr.Room) {
        let item = cc.instantiate(this.itemPrefab)
        item.getComponent("Item").init(data.name, "1/4", "playing")
        this.roomList.content.addChild(item)
    }
    private joinRoom(id: string) {
        NetManager.instance().joinRoom(id)
    }
    private onJoinRoom(code: string) {
        if(code.length <= 0) {
            cc.director.loadScene("game")
        } else {
            
        }
    }

}
