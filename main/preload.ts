import * as electron from "electron";

process.once("loaded", () => {
  global.ipc = electron.ipcRenderer;
});
