// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import {proto} from "./proto"
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    username: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        starx.on("LoginRes", (data)=>{
            let res = proto.gate.LoginRes.decode(data)
            cc.log(res)
            if(res.code.length <= 0){
                cc.director.loadScene("lobby")
            }
        })
    }
    login () {
        starx.init({host: '127.0.0.1', port: 3250, path: '/ws'}, ()=>{
            cc.log("connected")
            let req = proto.gate.LoginReq.create({username:this.username.string})
            let buff  = proto.gate.LoginReq.encode(req).finish()
            starx.notify('gateway.auth.login', buff)
        })
        
    }
    // update (dt) {}
}
