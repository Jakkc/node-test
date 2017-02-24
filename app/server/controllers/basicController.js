const basicController = {};

basicController.get = (req,res) => {
	res.json({
		message: 'app.js > routes.js > basicController.js'
	})
};

module.exports = basicController