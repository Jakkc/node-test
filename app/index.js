const app = require('./server/app');
const port = 3000;
const express = require('express');
const environment = require('./server/environment'); 

// set up view engine + static assets path
environment(app);

app.listen(port, (err) => {
	if(err) return console.log('CODE RED: MAINFRAME COMPROMISED',err);
	console.log('CODE GREEN: MAINFRAME INITIALISED');
	console.log(`MAINFRAME IS ACTIVE ON PORT ${port}`);
})