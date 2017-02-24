const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = require('./app');

const environment = (app) => {
	app.engine('.hbs', exphbs({
		defaultLayout: 'main',
	    extname: '.hbs',
	    layoutsDir: path.join(__dirname, './../views/layouts'),
	    partialsDir: path.join(__dirname, './../views/partials')
	}))
	app.set('view engine', '.hbs')
	app.set('views', path.join(__dirname,'./../views'))

	app.use(express.static(__dirname + './../src'));	
}

module.exports = environment;