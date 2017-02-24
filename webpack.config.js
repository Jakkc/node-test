const webpack = require('webpack');
const path = require('path');

const config = {
	context: path.resolve(__dirname,'./app/assets'),
	entry: './js/test.js',
	output: {
		path: path.resolve(__dirname,'./app/src/js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: path.resolve(__dirname,'./app/src/js'),
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						['es2015', { modules: false }]
					]
				}
			}, {
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		}]
	}
}

module.exports = config