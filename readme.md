# GDG UNAM taller de electron
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



