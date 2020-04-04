/*Una version mas actualizada de la app del commit anterior seria
  una app donde podamos abrir las herramientas de desarrollador
  manejar la ventana cuando esta sea cerrada y volver a crear la sesion
  cuando en MacOS se la da click al icono que tenemos en el dock*/

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
    // Abrir el archivo index.HTML
    win.loadFile('static/index.html');

    // Habilitamos las herramientas de desarrollador
    // automaticamente cuando inicie la aplicacion
    win.webContents.openDevTools();
}

// Cuando la aplicacion este lista creara nuestra ventana
app.whenReady().then(createWindow);


// Salir cuando todas las ventanas son cerradas
app.on('window-all-closed', ()=>{
    // En MacOS es comun que las aplicaciones se mantengan activas
    // en el dock al menos que se salga explicitamente con cmd + q
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on("activate", ()=>{
    // En MacOS es comun que se vuelvan a crear las ventanas cuando
    // le das click al icono del dock y no hay mas ventanas abiertas
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})