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

	app.get('/svg', (req,res) => res.render('svg-test'));

	app.get('/react', (req,res) => {
		res.render('react');
	})

	// User Routes
	app.get('/users', userController.get);
	app.post('/users', userController.post);
}

module.exports = routes;