// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import Constants from "../data/Constants";
import GameData from "../data/GameData";
import { proto } from "../libs/proto";
import NetManager from "../data/NetManager";
import UIManager from "../common/UIManager";
import CustomEventListener from "../common/CustomEventListener";
@ccclass
export default class LobbyUI extends cc.Component {

    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null

    @property(cc.ScrollView)
    roomList: cc.ScrollView = null;

    @property(cc.EditBox)
    roomName: cc.EditBox = null

    @property(cc.Label)
    title: cc.Label = null

    private _title:string
    onLoad() {
        this._title = this.title.string
    }
    start() {
        this.refreshList()
    }
    onEnable() {
        CustomEventListener.on(Constants.EventName.UPDATE_ROOM_LIST, this.updateRoomList, this)
        CustomEventListener.on(Constants.EventName.JOIN_ROOM_RESPONSE, this.onJoinRoom, this)
    }
    onDisable() {
        CustomEventListener.off(Constants.EventName.UPDATE_ROOM_LIST, this.updateRoomList, this)
        CustomEventListener.off(Constants.EventName.JOIN_ROOM_RESPONSE, this.onJoinRoom, this)
    }

    private updateRoomList(...args: any[]) {
        let op = args[0]
        if(op === "set") {
            args[1].forEach((e:proto.mgr.Room) => {
                let item = cc.instantiate(this.itemPrefab)
                item.getComponent("Item").init(e.id, e.name, "1/4", "playing")
                this.roomList.content.addChild(item)
            });
        } else if(op === "add") {
            if(args[1].code.length > 0){
                UIManager.showDialog("dialogTip", null, args[1].code)
                return
            }
            let room = args[1].room
            let item = cc.instantiate(this.itemPrefab)
            item.getComponent("Item").init(room.id, room.name, "1/4", "playing")
            this.roomList.content.addChild(item)
        }
        let len = this.roomList.content.children.length
        this.title.string = `${this._title}(${len})`

    }
    public refreshList() {
        this.roomList.content.children.length = 0
        NetManager.instance().getRoomList()
    }
    private onJoinRoom(code: string) {
        if(code.length <= 0) {
            cc.director.loadScene("game")
        } else {
            UIManager.showDialog("dialogTip", null, code)
        }
    }
    public createRoom() {
        if(this.roomName.string.length <= 0 ) {
            UIManager.showDialog("dialogTip", null, "请输入房间名")
            return
        }
        NetManager.instance().createRoom(this.roomName.string)
        this.roomName.string = ""
    }

}
