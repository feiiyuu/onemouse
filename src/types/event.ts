enum event {
    START_SERVER = 'start-server',
    STOP_SERVER = 'stop-server',
    GET_LOCALIP = 'get-localIP',
    CREATE_WINDOW = 'create-window',
    CLOSE_WINDOW = 'close-window',
    GET_MOUSE = 'get-mouse',
    MOUSE_MOVE = 'mouse-move',
    GET_DESKTOPID = 'get-desktopId',
    CLOSE_VICEWINDOW = 'close-vicewindow',
    GET_MOUSEEVENT = 'get-mouseevent',
    MOUSE_EVENT = 'mouse-event',
    KEYBOARD_COLLECT = 'keyboard-collect',
    KEYBOARD_EVENT = 'keyboard-event',
    AUTO_START = 'auto-start',
    SERVER_PORT_INUSE = 'server-port-inuse',
    HIDE_WIN = 'hide-win',
    CLOSE_WIN = 'close-win',
}

export {
    event
}