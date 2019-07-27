"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron = require("electron");
const electronIsDev = require("electron-is-dev");
// @ts-ignore
const electronNext = require("electron-next");
const path = require("path");
require("reflect-metadata");
const typeorm = require("typeorm");
const url = require("url");
const ipc = electron.ipcMain;
electron.app.on("ready", async () => {
    await electronNext("./frontend");
    try {
        await typeorm.createConnection({
            type: "sqlite",
            database: path.resolve(electron.app.getPath("userData"), "master.sqlite3"),
            entities: [path.resolve(__dirname, "entity", "*.js")],
            synchronize: true,
        });
        await (await Promise.resolve().then(() => require("./data/ItemClass"))).default;
        await (await Promise.resolve().then(() => require("./data/BaseType"))).default;
        await (await Promise.resolve().then(() => require("./data/Unique"))).default;
    }
    catch (e) {
        console.log(e);
    }
    const ipc_methods = {
        filter: (await Promise.resolve().then(() => require("./ipc/filter"))).default,
    };
    ipc.on("message", async (event, handler, method, params) => {
        console.log("[Backend] Message received", handler, method, params);
        try {
            const response = await ipc_methods[handler][method].apply(event, params);
            if (response !== undefined)
                event.reply("message", handler, method, [response]);
        }
        catch (exception) {
            console.log(exception);
            event.reply("error", handler, method, exception);
        }
    });
    const mainWindow = new electron.BrowserWindow({
        width: 1200,
        height: 900,
        x: 0,
        y: 0,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, "preload.js"),
        },
    });
    await mainWindow.loadURL(electronIsDev ? "http://localhost:8000" : url.format({ pathname: path.join(__dirname, "../frontend/index/index.html"), protocol: "file:", slashes: true }));
});
// Quit the app once all windows are closed
electron.app.on("window-all-closed", electron.app.quit);
