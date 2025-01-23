import { app, ipcMain, BrowserWindow } from 'electron'
import { getLocalIP, createFullWindow, CloseWindow } from './utils'
import { CreateWS, StopWS } from './ws'
import { event } from '../../types/event'

function InitProcess(mainWin: BrowserWindow) {
    // createFullWindow()
    app.whenReady().then(() => {
        ipcMain.handle(event.START_SERVER, (event, port, password) => {
            return CreateWS(port, password)
        })

        ipcMain.on(event.STOP_SERVER, StopWS)

        ipcMain.handle(event.GET_LOCALIP, getLocalIP)

        ipcMain.handle(event.CREATE_WINDOW, (event, host_name: string, port: number, password: number) => {
            return createFullWindow(mainWin, host_name, port, password)
        })

        ipcMain.on(event.CLOSE_WINDOW, (event, win: number) => {
            CloseWindow(win)
        })

        ipcMain.on(event.HIDE_WIN, () => {
            mainWin.hide()
        })
        ipcMain.on(event.CLOSE_WIN, () => {
            mainWin.close()
        })
    })
}
export {
    InitProcess
}