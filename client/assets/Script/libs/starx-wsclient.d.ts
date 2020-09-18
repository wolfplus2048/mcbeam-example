declare namespace starx {
    function init(param: any, cb: Function)
    function notify(route: string, msg: any)
    function request(route: string, msg: any, cb: Function)
    function disconnect()
    function on(route: string, cb: Function)
}