// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {
  MouseData,
  MouseEventData,
  KeyBoardData,
  EventType,
  ActionKey,
  ActionType
} from './types/conn'

import { contextBridge, ipcRenderer } from 'electron'
import { event } from './types/event'

const mapping = {
  StartServer: (port: number, password: number) => ipcRenderer.invoke(event.START_SERVER, port, password),
  StopServer: () => ipcRenderer.send(event.STOP_SERVER),
  GetLocalIP: () => ipcRenderer.invoke(event.GET_LOCALIP),
  CreateWindow: (host_name: string, port: number, password: number) => ipcRenderer.invoke(event.GET_LOCALIP, host_name, port, password),
  CloseWindow: (win: number) => ipcRenderer.send(event.CLOSE_WINDOW, win),
  CollectionMousePosition: (collect: boolean, win: number) => ipcRenderer.send(event.GET_MOUSE, collect, win),
  // move mouse
  MouseAction: (data: MouseData) => ipcRenderer.send(event.MOUSE_MOVE, data),

  GetDeskTopId: () => ipcRenderer.invoke(event.GET_DESKTOPID),

  RTCSendMousePosition: (callback: (x: number, y: number) => void) => {
    ipcRenderer.removeAllListeners(EventType.MOUSE)    // avoid memory leak
    ipcRenderer.on(EventType.MOUSE, (event, x, y) => callback(x, y))
  },

  ViceWindowClosed: (callback: () => void) => {
    ipcRenderer.removeAllListeners(event.CLOSE_VICEWINDOW) // avoid memory leak
    ipcRenderer.on(event.CLOSE_VICEWINDOW, () => callback())
  },

  // 渲染进程到主进程接受鼠标事件
  GetMouseEvent: (actionType: ActionType, actionKey: ActionKey) => {
    ipcRenderer.send(event.GET_MOUSEEVENT, actionType, actionKey)
  },

  // 渲染进程提供RTC发送鼠标事件
  RTCSendMouseEvent: (callback: (actionType: ActionType, actionKey: ActionKey) => void) => {
    ipcRenderer.removeAllListeners(EventType.MOUSEEVENT);
    ipcRenderer.on(EventType.MOUSEEVENT, (event, actionType, actionKey) => callback(actionType, actionKey))
  },

  // 执行鼠标点击事件
  MouseEventAction: (data: MouseEventData) => ipcRenderer.send(event.MOUSE_EVENT, data),

  // 客户端是否发送键盘事件
  KeyBoardCollect: (collect: boolean) => ipcRenderer.send(event.KEYBOARD_COLLECT, collect),

  // 键盘是否监听
  onKeyBaordCollect: (cb: (args: boolean) => void) => {
    ipcRenderer.removeAllListeners(EventType.KEYBOARD)
    ipcRenderer.on(EventType.KEYBOARD, (_, collect) => cb(collect))
  },

  // 执行键盘输入事件
  KeyBoardEventAction: (data: KeyBoardData) => ipcRenderer.send(event.KEYBOARD_EVENT, data),

  // 设置开机自启
  AutoLaunch: (start: boolean) => ipcRenderer.send(event.AUTO_START, start),

  // 服务端 端口被占用提示
  ServerPortInuse: (callback: () => void) => {
    ipcRenderer.removeAllListeners(event.SERVER_PORT_INUSE)
    ipcRenderer.on(event.SERVER_PORT_INUSE, () => callback())
  },
  // 最小化
  hideWin: () => ipcRenderer.send(event.HIDE_WIN),

  //退出软件
  closewin: () => ipcRenderer.send(event.CLOSE_WIN)
}

contextBridge.exposeInMainWorld('oneMouse', mapping)

declare global {
  interface Window {
    oneMouse: typeof mapping;
  }
}