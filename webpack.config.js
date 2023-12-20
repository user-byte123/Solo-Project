const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
	mode: 'development',
	//entry point of our app, where the webpack looks to start building the bundle
	entry: './client/index.js',
	output: {
			filename:'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				},	
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			}
		],
	},
	resolve: {
		//enables importing JS/JSX files without specifying their extension
		extensions: ['.js','.jsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html'
		})
	],
	devServer: {
		static: {
			publicPath: '/dist',
			directory: path.join(__dirname, 'dist'),
		},
		proxy: {
			'/api': 'http://localhost:3000'
		}
	},
};