const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const expressSession = require('express-session');

mongoose.connect('mongodb://localhost:27017/node-test', () => {
	console.log('connected to mongodb...');
})

const app = express();

// Middleware goes here
const middleware = (req, res, next) => {
	console.log('Currently requesting: ',req.path);
	next();
}

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(expressSession({
	secret: 'test',
	resave: false,
	saveUninitialized: false,
	cookie: {}
}));

app.use(middleware); // just an example

routes(app);

module.exports = app;