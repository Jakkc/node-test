//'use strict'
require('import-export');
const app = require('./server/app');
const express = require('express');
const path = require('path');
const port = 3000;
const exphbs = require('express-handlebars');
const pg = require('pg')
const bodyParser = require('body-parser');
const conString = 'postgres://localhost:5432/nodedb';

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}))
app.set('view engine', '.hbs')
app.set('views',path.join(__dirname,'app/views'))

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/src'))

app.listen(port, (err) => {
	if(err) return console.log('CODE RED: MAINFRAME COMPROMISED',err);
	console.log('CODE GREEN: MAINFRAME INITIALISED');
	console.log(`MAINFRAME IS ACTIVE ON PORT ${port}`);
})

// app.post('/users', (req,res,next) => {
// 	const user = req.body
// 	console.log('USER CONSOLE LOG',user)
// 	pg.connect(conString, (err,client,done) => {
// 		if(err) return next(err)
// 		client.query('INSERT INTO users (name, age) VALUES ($1, $2);',[user.name,user.age],(err,result) => {
// 			done()
// 			if(err) return next(err)
// 			res.render('users')
// 			//res.send(200)

// 			console.log('user inserted into db');
// 		})
// 	})
// })