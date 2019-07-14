import IPC from "../../typings/IPC";
import * as Electron from "electron";

const Methods: IPC.Backend.Handlers["window"] = {
  minimize(): boolean {
    Electron.BrowserWindow.fromId(this.frameId).minimize();
    return Electron.BrowserWindow.fromId(this.frameId).isMinimized()
  },
  maximize(): boolean {
    Electron.BrowserWindow.fromId(this.frameId).maximize();
    return Electron.BrowserWindow.fromId(this.frameId).isMaximized()
  },
  restore(): boolean {
    Electron.BrowserWindow.fromId(this.frameId).restore();
    return Electron.BrowserWindow.fromId(this.frameId).isMaximized()
  },
  close(): void {
    Electron.BrowserWindow.fromId(this.frameId).close();
  },
};

export default Methods;
