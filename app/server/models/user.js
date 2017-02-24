const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: [4,'Username must be 5 characters or more.']
	},
	age: {
		type: Number,
		required: true
	}
})

// This is where encryption happens

const User = mongoose.model('User', userSchema);

module.exports = User;