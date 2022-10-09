const { app, BrowserWindow } = require('electron')
const path = require("path");
const isDev = require('electron-is-dev');

const createWindow = () => {
    const win = new BrowserWindow({
      icon: './icon/icon.png',
      show: false,
      darkTheme: true,
      autoHideMenuBar: true,
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#090909',
        symbolColor: '#0094FF',
        height: 30
      },
      backgroundColor: '#090909',
      webPreferences: {
        nodeIntegration: true
      }
    });
    win.maximize();
    win.show();

    win.loadURL(isDev ? 'http://localhost:5173/': `https://www.google.com/`);
}

app.whenReady().then(() => {
  if (process.platform === 'darwin') {
  }
}).then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});