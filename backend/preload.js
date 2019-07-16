"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron = require("electron");
process.once("loaded", () => {
    global.ipc = electron.ipcRenderer;
});
