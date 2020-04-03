# GDG UNAM taller de electron

Este taller se base de la [documentacion de electron](https://www.electronjs.org/docs)

## Requisitos:
	- NPM
	- NODE
	- Editor de texto

## Creating your first app
### Estructura basica:
	 your_app
		package.json
		main.js
		index.html
	
Lo primero que haremos es un "npm init" en nuestro directorio (asegurarnos de que el main se llame main.js, aunque si no se declara
un main.js electron buscara un index.html justo como lo haria nodejs)
	 
Creamos el resto de nuestros archivos

Asegurarnos de crear en nuestro package.json en la seccion de los scripts un script "start": "electron ."
	
	{
		"name": "your-app",
		"version": "0.1.0",
		"main": "main.js",
		"scripts": {
		"start": "node ."
		}
	}


### instalar electron 

`npm install --save-dev electron` 

esto lo hacemos para guardar nuestra dependecia de electron como dependencia

## Electron basics

Las aplicaciones de electron son desarrolladas con JS con los mismos principios y metodos de nodejs, podemos hacer uso de todas las API y caracteristicas de electron con el modulo `electron`

`const electron = require('electron');`

El modulo de electron expone caracteristicas por medio de namespaces, unos ejemplos de esto es el ciclo de vida de una aplicacion es manejado a traves de `electron.app` y las ventanas de nuestras apps son creadas utilizando `electron.BrowserWindow`

`main.js` sera el encargado de crear ventanas y de manejar todos los eventos del sistema.

### Fin de principios de electron
[Tutorial](https://www.electronjs.org/docs/tutorial/first-app)

## Trabajando con electron.

Electron no tiene una estructura basica que seguir, o una forma "correcta" con la cual trabajar.
Electron esta hecho para que cada desarrollador eliga la estructura que mas le apetezca para trabajar, es ideal para proyectos pequeños o proyectos grandes.

### Boilerplate vs CLI

Los boileplates no son mas que un punto de partida, podemos utilizar esto para darle un inicio a nuestro proyecto, pero estos son altamente personalizables.
Por otro lado los CLI (linea de comandos) son mucho mas practicos y nos seran de mucha ayuda a lo largo de nuestro proyecto, pero estos impondran muchas reglas a la hora de hablar de estructurar nuestro proyecto.

#### Herramientas mas utilizadas para electron.
- [electron-forge](https://www.electronforge.io/)
- [electron-builder](https://www.electron.build/)
- [electron-react-boilerplate](https://electron-react-boilerplate.js.org/docs/installation/)
- [otros](https://github.com/sindresorhus/awesome-electron#boilerplates)

## Electron Application Architecture

### Main and render processes
En electron el proceso 	que ejecuta el "main script" es el *proceso principal*, este es el proceso que depliega la GUI para crear la pagina web, una aplicacion de electron solo puede tener un proceso principal, pero nunca mas.


Ya que que electron utiliza Chromium para desplegar sus paginas web, este tambien utiliza la arquitectura multiproceso de Chromium en la que cada pagina web de electron se ejecuta en su propio proceso, este proceso es el *proceso de renderisacion*

Normalmente las paginas web se ejecutan en un ambiente aislado (sandboxes) y estas no permiten la obtencion de recursos nativos, pero electron provee la oportunidad de utilizar node.js APIs en las paginas lo cual nos da la posibilidad de hacer operaciones de bajo nivel en el sistema operativo.

[info](https://www.electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes)

