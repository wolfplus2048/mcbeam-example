// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

interface IEventData {
    func: Function
    target: any
}
interface IEvent {
    [eventName: string]: IEventData[]
}
@ccclass
export default class CustomEventListener {
    public static handle: IEvent = {}

    public static on(eventName: string, cb: Function, target?: any) {
        if(!this.handle[eventName]) {
            this.handle[eventName] = []
        }
        const data: IEventData = {func: cb, target: target}
        this.handle[eventName].push(data)
    }

    public static off(eventName: string, cb: Function, target?: any) {
        const list = this.handle[eventName]
        if(!list || list.length <= 0) {
            return;
        }
        for (let i = 0; i < list.length; i++) {
            const event = list[i]
            if(event.func == cb && (!target || target == event.target)) {
                list.splice(i, 1)
                break;
            }
        }
    }

    public static dispatchEvent(eventName: string, ...args:any) {
        const list = this.handle[eventName]
        if(!list || list.length <= 0){
            return
        }
        for(let i = 0; i < list.length; i++) {
            const event = list[i]
            event.func.apply(event.target, args)
        }
    }
}
