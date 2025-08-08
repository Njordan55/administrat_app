// electron/main.js

const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  // Lade eine HTML-Datei oder URL, z.B. deine Frontend-App:
  win.loadURL('http://localhost:3000'); // Wenn Frontend läuft
  // Alternativ lokale Datei: win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});