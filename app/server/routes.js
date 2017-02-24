const db = require('./models');

// Controller imports
const basicController = require('./controllers/basicController');
const userController = require('./controllers/userController');

const routes = (app) => {
	// Basic Routes
	app.get('/', (req,res) => {
		res.render('home', {
			name: 'Jack'
		})
	});	

	app.get('/test', basicController.get);

	app.get('/users', userController.get);

	// User Routes
	app.post('/users', userController.post);
}

module.exports = routes;