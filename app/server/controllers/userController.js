const db = require('./../models');
const dbQuery = require('./dbQueries');
const userController = {};

userController.post = (req, res) => {
	const { name, age } = req.body; // get info from request body
	console.log('req.body =',req.body);
	
	// Validation would go here
	
	const user = new db.User({
		name,
		age
	});

	user.save().then((newUser) => {
		console.log(newUser.name,'was successfully posted to the database...');
		res.redirect('back');
	}).catch((err) => {
		res.status(500).json({
			message: err
		});
	});
}

userController.get = (req,res) => {
	dbQuery.getUsers().exec((err,users) => {
		if(err) console.log('error',err);
		res.render('users',{
			users: users
		})
	});
}

module.exports = userController;