import Constants from "../data/Constants";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import NetManager from "../data/NetManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    roomName: cc.Label = null;

    @property(cc.Label)
    number: cc.Label = null;

    @property(cc.Label)
    state: cc.Label = null;

    private _roomid: string
    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this)

    }
    init(id: string, name:string, number:string, state:string) {
        this._roomid = id
        this.roomName.string = name
        this.number.string = number
        this.state.string = state
    }
    _touchStart(){
    }
    _touchEnd(){
        console.log(`join room: ${this._roomid}`)
        NetManager.instance().joinRoom(this._roomid)
    }
}
