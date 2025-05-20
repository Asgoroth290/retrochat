const { BrowserWindow, app } = require("electron")

const createWindow = () => { 
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    //For macOS: app will stay listening for "activate" to check if all windows are closed
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

//quits app when all windows are closed except for macOS
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit;
})