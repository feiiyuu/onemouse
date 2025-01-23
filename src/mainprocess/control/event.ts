import { app, ipcMain, BrowserWindow } from 'electron'
import { CollectMousePosition, mouseAction, sendMouseAction, MouseEventAction } from './mouse'
import { CatchDeskTopSourceId } from './screen'
import { KeyBoardCollect, actionKeyBaordEvent } from './keyboard'
import { AutoLaunch } from './startup'
import { event } from '../../types/event'
function InitEvent(mainWin: BrowserWindow) {
    app.whenReady().then(() => {
        ipcMain.on(event.GET_MOUSE, (event, collect: boolean, win: number) => {
            CollectMousePosition(collect, win, mainWin)
        })
        ipcMain.on(event.MOUSE_MOVE, (event, data) => {
            mouseAction(data)
        })
        ipcMain.handle(event.GET_DESKTOPID, CatchDeskTopSourceId)

        ipcMain.on(event.GET_MOUSEEVENT, (event, actionType, actionKey) => {
            sendMouseAction(mainWin, actionType, actionKey)
        })

        ipcMain.on(event.MOUSE_EVENT, (event, { actionType, actionKey }) => {
            MouseEventAction(actionType, actionKey)
        })

        ipcMain.on(event.KEYBOARD_COLLECT, (event, collect) => {
            KeyBoardCollect(mainWin, collect)
        })

        ipcMain.on(event.KEYBOARD_EVENT, (event, { eventType, code }) => {
            actionKeyBaordEvent(eventType, code)
        })

        ipcMain.on(event.AUTO_START, (event, start) => {
            AutoLaunch(app, start)
        })

        process.on('uncaughtException', (error) => {
            // 捕获到未处理的异常后的处理代码
            console.error(error.message);
            // 端口被占用
            if (error.message.startsWith('listen EADDRINUSE')) {
                mainWin.webContents.send(event.SERVER_PORT_INUSE)
            }
        });
    })
}

export {
    InitEvent
}