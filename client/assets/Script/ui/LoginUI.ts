import CustomEventListener from "../common/CustomEventListener";
import UIManager from "../common/UIManager";
import Constants from "../data/Constants";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import NetManager from "../data/NetManager";
import PlayerData from "../data/PlayerData";
import { helloworld } from "../libs/helloworld";
import { proto } from "../libs/proto";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginUI extends cc.Component {
    @property(cc.EditBox)
    username : cc.EditBox = null
    @property(cc.ProgressBar)
    loadingBar: cc.ProgressBar = null

    serverID: string
    onLoad() {
        this.username.string = "wolfplus"
    }

    start() {
        console.log("start LoginUI")
        this.init()
        CustomEventListener.on(Constants.EventName.LOGIN_RESPONSE, this.onLogin, this)

        this.loadingBar.node.active = false
    }
    onDestroy() {
        CustomEventListener.off(Constants.EventName.LOGIN_RESPONSE, this.onLoad, this)
    }
    init() {
        NetManager.instance().init()
    }
    login() {
        if(this.username.string.length <= 0 ) {
            UIManager.showDialog("dialogTip", null, "请输入用户名")
            return
        }
        NetManager.instance().login(this.username.string)
    }
    public CallTest(username:string) {
        let req = helloworld.Request.create({name:username})
        let buff = helloworld.Request.encode(req).finish()
        starx.request("helloworld.Helloworld.Call", buff, (ret)=>{
            let rsp = helloworld.Response.decode(ret)
            console.log(rsp)
        })
    }
    public JoinTest(username:string) {
        
        let req = helloworld.Empty.create()
        let buff = helloworld.Empty.encode(req).finish()

        starx.request("helloworld.Helloworld.Join", buff, (ret)=>{
            let rsp = helloworld.Response.decode(ret)
            console.log(rsp)
            this.serverID = rsp.msg

        })
    }

    public NotifyTest(){
        let req = helloworld.Request.create({name:this.serverID})
        let buff = helloworld.Request.encode(req).finish()

        starx.notify(this.serverID + ".helloworld.Helloworld.Notify", buff)
    }
    onLogin(...args:string[]) {
        console.log("onLogin: ", args)
        if(args[0].length <= 0) {
            this.loadingBar.node.active = true
            let backup = cc.loader.onProgress
            cc.loader.onProgress = (count:number, amount: number) => {
                this.loadingBar.progress = count / amount
            }
            cc.director.preloadScene("lobby", () => {
                cc.loader.onProgress = backup
                cc.director.loadScene("lobby")
            })
        } else {
            UIManager.showDialog("dialogTip", null, args[0])
        }

    }
}


