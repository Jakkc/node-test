const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
	throw new Error('oops');
})

app.use((err,req,res,next) =>{
	console.log(err);
	res.status(500).send('Something broke!');
})

// app.use((req,res,next) => {
// 	console.log(req.headers);
// 	next();
// })

// app.use((req,res,next) => {
// 	req.chance = Math.random();
// 	next();
// })

// app.get('/',(req,res) => {
// 	res.json({
// 		chance: req.chance
// 	})
// })

app.listen(port, (err) => {
	if(err) return console.log('CODE RED: MAINFRAME COMPROMISED',err);
	console.log('CODE GREEN: MAINFRAME INITIALISED');
	console.log(`MAINFRAME IS ACTIVE ON PORT ${port}`);
})