// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {
    static _dictPanel = new Map<string, cc.Node>()

    public static showDialog(name: string, cb?: Function, ...args: any[]) {
        const scriptName = name.substr(0, 1).toUpperCase() + name.substr(1)
        if(this._dictPanel.has(name)) {
            const panel = this._dictPanel.get(name)
            const parent = cc.find("Canvas")
            panel.parent = parent
            const comp = panel.getComponent(scriptName)
            if(comp && comp['show']) {
                comp['show'].apply(comp, args)
            }
            if(cb) {
                cb()
            }
            return
        }
        const path = `ui/${name}`
        cc.resources.load(path, cc.Prefab, (err: any, prefab: cc.Prefab) => {
            if(err) {
                console.warn(err);
                return
            }
            const panel = cc.instantiate(prefab) as cc.Node
            this._dictPanel.set(name, panel)
            const parent = cc.find("Canvas")
            panel.parent = parent
            const comp = panel.getComponent(scriptName)
            if(comp && comp['show']) {
                comp['show'].apply(comp, args)
            }
            if(cb) {
                cb()
            }
        })
    }

    public static hideDialog(name: string, cb?: Function) {
        if(this._dictPanel.has(name)) {
            const scriptName = name.substr(0, 1).toUpperCase() + name.substr(1)
            const panel = this._dictPanel.get(name)
            panel.parent = null
            const comp = panel.getComponent(scriptName)
            if(comp && comp['hide']) {
                comp['hide'].apply(comp)
            }
            if (cb){
                cb()
            }
        }
    }
}
