import UIManager from "../common/UIManager";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { proto } from "../libs/proto";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
    start() {
        starx.on("BeginGameNot", (ret)=>{
            let not = proto.mj.BeginGameNot.decode(ret)
            console.log(not)
            UIManager.showDialog("dialogTip", null, "游戏开始")
        })
        starx.on("SetDealerNot", (ret)=>{
            let not = proto.mj.SetDealerNot.decode(ret)
            console.log(not)
        })
        starx.on("HandCardsNot", (ret)=>{
            let not = proto.mj.HandCardsNot.decode(ret)
            console.log(not)
        })
        starx.on("ChuPaiReq", (ret)=>{
            let req = proto.mj.OperateReq.decode(ret)
            console.log(req)
            let rsp = proto.mj.OperateRes.create({opCode: req.opCodes[0]})
            starx.notify("room.mjhandler.operate", proto.mj.OperateRes.encode(rsp).finish())
        })
        starx.on("OperateNot", (ret)=>{
            let req = proto.mj.OperateNot.decode(ret)
            console.log(req)
        })
    }

}
