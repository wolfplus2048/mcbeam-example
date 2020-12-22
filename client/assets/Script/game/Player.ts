// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    spr_face: cc.Sprite
    @property(cc.Label)
    txt_nickname: cc.Label


    init(face: cc.SpriteFrame, username: string) {
        this.spr_face.spriteFrame = face
        this.txt_nickname.string = username
    }
    onLoad() {

    }

}
