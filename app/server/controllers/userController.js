const db = require('./../models');
const dbQuery = require('./dbQueries');
const userController = {};

userController.post = (req, res) => {
	const { name, age } = req.body; // get info from request body
	
	// Validation
	req.checkBody('name','Your name is required').notEmpty();
	req.checkBody('age','Your age is required').notEmpty();

	const errors = req.validationErrors();

	if(errors) {
		req.session.errors = errors;
		res.redirect('back');
	} else {
		const user = new db.User({ name, age });

		user.save().then((newUser) => {
			console.log(newUser.name,'was successfully posted to the database...');
			res.redirect('back');
		}).catch((err) => {
			res.status(500).json({
				message: err
			});
		});

		console.log('No validation errors');
	}
}

userController.get = (req,res) => {
	const errors = req.session.errors;
	req.session.errors = null;
	dbQuery.getUsers().exec((err,users) => {
		if(err) console.log('error',err);
		res.render('users',{
			users: users,
			errors: errors
		})
	});
}

userController.delete = (req,res) => {

}

module.exports = userController;