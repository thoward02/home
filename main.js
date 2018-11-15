const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');

var MainWindow = null;


//Create our window

const CreateWindow = () => {
  MainWindow = new BrowserWindow({width: 1000, height: 705, frame: false, fullscreen: true, backgroundColor: '#fffff' });
  MainWindow.loadURL(require('url').format({
    pathname: path.join(__dirname, 'main.html'), //Our main page where we're gonna load data etc etc
    protocol: 'file:',
    slashes: true
  }));
  MainWindow.on('closed', () => {
    mainWindow = null;
  });
   //Okay I know this negates the whole width and height above, don't judge.
}


app.on('ready', function(){

    CreateWindow();

});
