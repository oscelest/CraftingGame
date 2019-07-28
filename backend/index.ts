import * as electron from "electron";
import * as electronIsDev from "electron-is-dev";
// @ts-ignore
import * as electronNext from "electron-next";
import * as path from "path";
import "reflect-metadata";
import * as typeorm from "typeorm";
import * as url from "url";
import IPC from "../typings/IPC";

const ipc = electron.ipcMain as IPC.Backend;

electron.app.on("ready", async () => {
  await electronNext("./frontend");
  try {
    await typeorm.createConnection({
      type:        "sqlite",
      database:    path.resolve(electron.app.getPath("userData"), "master.sqlite3"),
      entities:    [path.resolve(__dirname, "entity", "*.js")],
      synchronize: true,
    });
    await (await import("./data/ItemClass")).default;
    await (await import("./data/BaseType")).default;
    await (await import("./data/Unique")).default;
  }
  catch (e) {
    console.log(e);
  }
  
  const ipc_methods: IPC.Backend.Handlers = {
    base_type: (await import("./ipc/base_type")).default,
    item_class: (await import("./ipc/item_class")).default,
    filter:     (await import("./ipc/filter")).default,
  };
  
  ipc.on("message", async (event, handler, method, params) => {
    console.log("[Backend] Message received", handler, method, params);
    try {
      const response = await ipc_methods[handler][method].apply(event, params);
      if (response !== undefined) event.reply("message", handler, method, [response]);
    }
    catch (exception) {
      console.log(exception);
      event.reply("error", handler, method, exception);
    }
  });
  
  const mainWindow = new electron.BrowserWindow({
    width:          1200,
    height:         900,
    x:              0,
    y:              0,
    frame:          false,
    webPreferences: {
      nodeIntegration: false,
      preload:         path.join(__dirname, "preload.js"),
    },
  });
  
  await mainWindow.loadURL(electronIsDev ? "http://localhost:8000" : url.format({pathname: path.join(__dirname, "../frontend/index/index.html"), protocol: "file:", slashes: true}));
});

// Quit the app once all windows are closed
electron.app.on("window-all-closed", electron.app.quit);



