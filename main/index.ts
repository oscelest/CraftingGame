import * as Electron from "electron";
import * as electronIsDev from "electron-is-dev";
import * as electronNext from "electron-next";
import * as path from "path";
import * as url from "url";
import {IPC} from "../typings/IPC";

const ipc = Electron.ipcMain as IPC.Main;

Electron.app.on("ready", async () => {
  await electronNext("./renderer");
  const ipc_methods: IPC.MainHandlers = {
    window: (await require("./ipc/window")).default,
    configuration: (await require("./ipc/configuration")).default
  };
  
  ipc.on("message", (event, handler, method, params) => {
    try {
      const response = ipc_methods[handler][method].apply(event, params);
      if (response !== undefined) event.reply(response instanceof Error ? "error" : "message", handler, method, response);
    }
    catch (exception) {
      console.log(exception);
      event.reply("error", handler, method, exception);
    }
  });
  
  const mainWindow = new Electron.BrowserWindow({
    width:          1200,
    height:         600,
    frame:          false,
    webPreferences: {
      nodeIntegration: false,
      preload:         path.join(__dirname, "preload.js"),
    },
  });
  
  await mainWindow.loadURL(electronIsDev ? "http://localhost:8000" : url.format({pathname: path.join(__dirname, "../renderer/index/index.html"), protocol: "file:", slashes: true}));
});

// Quit the app once all windows are closed
Electron.app.on("window-all-closed", Electron.app.quit);



