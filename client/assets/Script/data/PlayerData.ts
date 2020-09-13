// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerData extends cc.Component {
    static _instance: PlayerData
    private uid: string
    private username: string
    public static instance() {
        if(this._instance == null) {
            this._instance = new PlayerData()
        }
        return this._instance
    }
    public init(uid: string, username: string) {
        this.uid = uid
        this.username = username
    }
}
