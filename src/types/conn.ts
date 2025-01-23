enum EventType {
    MOUSE = 'mouse',
    MOUSEEVENT = 'mouseevent',
    KEYBOARD = 'keyboard',
    SCREEN = 'screen'
}

enum ActionType {
    PRESS = 'press',
    RELEASE = 'release',
    WHEEL = 'wheel'
}

enum KeyBoardEventType {
    KEYDOWN = 'keydown',
    KEYUP = 'keyup'
}

enum ActionKey {
    LEFT = 0,
    MIDDLE = 1,
    RIGHT = 2,
    SCROLLUP = 3,
    SCROLLDOWN = 4
}

export {
    EventType,
    ActionType,
    ActionKey,
    KeyBoardEventType
}


enum StartStatus {
    RUNNING = 'running',
    LOADING = 'loading',
    STOP = 'stop'
}

interface MouseData {
    x: number,
    y: number
}

interface MouseEventData {
    actionType: ActionType,
    actionKey: ActionKey
}

interface ScreenData {
    open: boolean,
    frameRate: string,
    audio:boolean
}

interface KeyBoardData {
    eventType: KeyBoardEventType,
    key: string
}

interface RTCdata {
    type: EventType,
    data: MouseData | ScreenData | MouseEventData | KeyBoardData
}

const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

export {
    StartStatus,
    ipPattern,
    RTCdata,
    MouseData,
    ScreenData,
    MouseEventData,
    KeyBoardData
}