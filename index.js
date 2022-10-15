const { app, BrowserWindow } = require('electron')
const path = require("path");
const isDev = require('electron-is-dev');

function createWindow () {
    const win = new BrowserWindow({
      minWidth: 800,
      minHeight: 600,
      icon: './src/assets/icon/icon.png',
      show: false,
      darkTheme: true,
      autoHideMenuBar: true,
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#000000',
        symbolColor: '#0094FF',
        height: 30
      },
      backgroundColor: '#000000',
      webPreferences: {
        nodeIntegration: true
      }
    });
    win.maximize();
    win.show();

    win.loadURL(isDev ? 'http://localhost:4200/': path.join(__dirname, `/dist/tas-x-frontend/index.html`),);
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
