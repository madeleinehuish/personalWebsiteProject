const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/'
  },
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
				test: /\.css$/
			},
			{
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					},
					{
    				loader: 'image-webpack-loader',
    				options: {}
					}
				],
				test: /\.(jpe?g|png|gif|svg)$/
			}

		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

module.exports = config;
