"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const Electron = require("electron");
const Methods = {
    async load() {
        const folder_paths = Electron.dialog.showOpenDialog(Electron.BrowserWindow.fromId(this.frameId), {
            title: "Select folder to add",
            defaultPath: path.resolve(Electron.app.getPath("documents"), "My Games", "Path of Exile"),
            properties: [],
        }) || [""];
        if (!folder_paths[0])
            return undefined;
        const file_contents = await fs.readFile(folder_paths[0]);
        console.log(file_contents);
    },
};
exports.default = Methods;
