const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node-test', () => {
	console.log('connected to mongodb...');
})

const app = express();

// Middleware goes here
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

routes(app);

module.exports = app;