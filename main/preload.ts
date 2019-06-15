import * as electron from "electron";

process.once("loaded", () => {
  global.ipc = electron.ipcRenderer;
});

declare global {
  namespace NodeJS {
    interface Global {
      ipc: electron.IpcRenderer
    }
  }
}
