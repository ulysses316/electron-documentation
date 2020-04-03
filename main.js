/*Este es el ejemplo mas basico de electronJS, lo minimo que necesitamos para crear
  una ventana de nuestra app creada con electron
  en los siguientes commits veremos como hacer cosas mas avanzadas */

// Creamos nuestra instancia de nuestro modulo electron
const {app, BrowserWindow} = require('electron');

// Crearemos la funcion que define la ventana de nuestra aplicacion
function createWindow(){
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');
}

// Cuando la aplicacion este lista creara nuestra ventana
app.whenReady().then(createWindow);
