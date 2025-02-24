// console.log("Hello from Electron 👋");
const { app, BrowserWindow, ipcMain } = require("electron");
const { log } = require("node:console");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  // win.loadURL("https://nextads.tektra.vn/");

  win.on("closed", () => {
    win = null;
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  ipcMain.on("btn", (event, val) => {
    console.log(`btn ${val} clicked`);
  });
  ipcMain.handle("ping", () => "ping1111");
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
