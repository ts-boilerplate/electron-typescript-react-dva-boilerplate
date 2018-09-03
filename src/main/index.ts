import URLS from "../server/constants/urls"
const { ENTRY_URL } = URLS
import * as electron from 'electron'
import installExtensions from "./installExtensions"

const { BrowserWindow, app } = electron



// browser window
let win

function createWindow() {
  // install extensions if necessary
  installExtensions()

  win = new BrowserWindow( { width: 800, height: 600 } )
  win.loadURL( ENTRY_URL )
  win.webContents.openDevTools()
}

app.on( "ready", createWindow )

app.on( 'activate', () => {
  if ( win === null ) {
    createWindow()
  }
} )