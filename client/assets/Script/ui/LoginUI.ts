import Constants from "../data/Constants";
import CustomEventListener from "../data/CustomEventListener";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import NetManager from "../data/NetManager";
import PlayerData from "../data/PlayerData";
import { proto } from "../libs/proto";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginUI extends cc.Component {
    @property(cc.Label)
    username : cc.Label
    @property(cc.ProgressBar)
    progress: cc.ProgressBar

    start() {
        CustomEventListener.on(Constants.EventName.LOGIN_RESPONSE, this.onLogin, this)
    }
    login() {
        NetManager.instance.login(this.username.string)
    }
    onLogin(...args:any[]) {
        let ply: proto.gate.LoginRes = args[0]
        if(ply.code.length <= 0) {
            PlayerData.instance().init(ply.uid, ply.username)
            cc.director.preloadScene("lobby", )
        }

    }
}


