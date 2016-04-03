var path = require("path");
var webpack = require('webpack');

module.exports = {

	entry: {
		main: [
			// 'webpack-dev-server/client?http://localhost:8080',
			// 'webpack/hot/dev-server',
			'webpack-hot-middleware/client?http://localhost:3000',
			'./client/client.js'
		]
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'react-hmre']
				}
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	devtool: "#inline-source-map",

	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

	// devServer: {
	// 	hot: true
	// }
}
