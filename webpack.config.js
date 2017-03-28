const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
	context: path.resolve(__dirname,'./src'),
	entry: './entry.js',
	output: {
		path: path.resolve(__dirname,'./app/assets'),
		filename: './bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: [{ loader: 'babel-loader', options: { presets: [[ 'es2015', { modules: false }]]}}]
		}, {
			test: /\.jsx$/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({ 
				fallback: 'style-loader', 
				use: ['css-loader', 'sass-loader']
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin('./css/main.css')
	]
}

module.exports = config