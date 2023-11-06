const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const { parseDirToJSON } = require("./readdir");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 500,
    y: 0,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  Menu.setApplicationMenu(null);

  mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();
});

ipcMain.on("choose-file", async (event, value) => {
  let result = await parseDirToJSON();
  event.sender.send("reply-choose", result);
});
