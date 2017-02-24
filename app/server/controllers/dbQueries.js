const db = require('.././models');
const dbQuery = {};

dbQuery.getUsers = () => {
	return db.User.find({})
}

module.exports = dbQuery;