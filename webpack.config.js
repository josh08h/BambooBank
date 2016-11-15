var path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: './static/build',
		filename: 'bundle.js'
	},
	resolve: {
		root:[
			path.resolve('./src')
		]
	}
}