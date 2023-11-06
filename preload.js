const { contextBridge, ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  contextBridge.exposeInMainWorld("api", {
    chooseFileButton: (callback) => {
      ipcRenderer.send("choose-file");
      ipcRenderer.on("reply-choose", (event, value) => {
        callback(value);
      });
    },
  });
});
