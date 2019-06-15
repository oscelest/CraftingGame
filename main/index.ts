import * as electron from "electron";
import * as electronIsDev from "electron-is-dev";
import * as electronNext from "electron-next";
import * as path from "path";
import * as url from "url";

// Prepare the renderer once the app is ready
electron.app.on("ready", async () => {
  // await electronNext(path.resolve(__dirname, "../renderer"));
  await electronNext("./renderer");
  
  const mainWindow = new electron.BrowserWindow({
    width:          800,
    height:         600,
    webPreferences: {
      nodeIntegration: false,
      preload:         path.join(__dirname, "preload.js"),
    },
  });
  
  return mainWindow.loadURL(electronIsDev
                            ? "http://localhost:8000"
                            : url.format({
      pathname: path.join(__dirname, "../renderer/index/index.html"),
      protocol: "file:",
      slashes:  true,
    }));
});

// Quit the app once all windows are closed
electron.app.on("window-all-closed", electron.app.quit);

// listen the channel `message` and resend the received message to the renderer process
// ipcMain.on("message", (event, message) => {
//   event.sender.send("message", message);
// });
