// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

enum EventName {
    LOGIN_RESPONSE = "login_response",
    UPDATE_ROOM_LIST = "update_room_list",

    JOIN_ROOM = "join_room",
    JOIN_ROOM_RESPONSE = "join_room_response"
}
@ccclass
export default class Constants extends cc.Component {
    public static EventName = EventName
}
