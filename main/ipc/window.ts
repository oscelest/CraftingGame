import {IPC} from "../../typings/IPC";
import * as Electron from "electron";

const Methods: IPC.WindowMainMethods = {
  minimize(this: IPC.MainEvent): boolean {
    Electron.BrowserWindow.fromId(this.frameId).minimize();
    return Electron.BrowserWindow.fromId(this.frameId).isMinimized()
  },
  maximize(this: IPC.MainEvent): boolean {
    Electron.BrowserWindow.fromId(this.frameId).maximize();
    return Electron.BrowserWindow.fromId(this.frameId).isMaximized()
  },
  restore(this: IPC.MainEvent): boolean {
    Electron.BrowserWindow.fromId(this.frameId).restore();
    return Electron.BrowserWindow.fromId(this.frameId).isMaximized()
  },
  close(this: IPC.MainEvent): void {
    Electron.BrowserWindow.fromId(this.frameId).close();
  },
};

export default Methods;
