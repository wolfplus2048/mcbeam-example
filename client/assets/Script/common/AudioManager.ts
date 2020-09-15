// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {
    public static playMusic(name: string) {
        const path = "audio/music/${name}"
        cc.resources.load(path, cc.AudioClip, (err: any, clip: cc.AudioClip) => {
            if(err) {
                console.warn(err)
                return
            }
            cc.audioEngine.playMusic(clip, true)
        })
    }

    public static playSound(name: string){
        const path="audio/sound/${name}"
        cc.resources.load(path, cc.AudioClip, (err: any, clip: cc.AudioClip)=>{
            if(err){
                console.warn(err)
                return
            }
            cc.audioEngine.playEffect(clip, false)
        })
    }
}
