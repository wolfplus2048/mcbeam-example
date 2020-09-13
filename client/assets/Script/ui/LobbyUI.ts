// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import Constants from "../data/Constants";
import CustomEventListener from "../data/CustomEventListener";
import {proto} from "../proto"
import RoomManager from "../RoomManager";
@ccclass
export default class LobbyUI extends cc.Component {

    @property(cc.Prefab)
    itemPrefab: cc.Prefab

    @property(cc.ScrollView)
    roomList: cc.ScrollView = null;

    @property(cc.Label)
    roomName: cc.Label = null

    start() {
        RoomManager.instance().rooms.forEach((value, key) => {
            let item = cc.instantiate(this.itemPrefab)
            item.getComponent("Item").init(value.name, "1/4", "playing")
            this.roomList.content.addChild(item)
        })
    }
    onEnable() {
        CustomEventListener.on(Constants.EventName.UPDATE_ROOM_LIST, this.updateRoomList, this)
    }
    onDisable() {
        CustomEventListener.off(Constants.EventName.UPDATE_ROOM_LIST, this.updateRoomList, this)
    }
    updateRoomList(data: proto.mgr.Room) {
        let item = cc.instantiate(this.itemPrefab)
        item.getComponent("Item").init(data.name, "1/4", "playing")
        this.roomList.content.addChild(item)
    }

}
