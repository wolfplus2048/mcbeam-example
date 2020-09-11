// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginUI extends cc.Component {
    @property(cc.Label)
    username : cc.Label

    login() {
        starx.init({host:"172.0.0.1", port:":3250", path:"/ws"}, (data)=>{
            console.log("connected to server")
            cc.director.loadScene("lobby")
        })
    }
}


