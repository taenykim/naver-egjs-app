const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: process.env.NODE_ENV, // ['development', 'production']
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "index.min.js", // chunk시, [name][hash].js
		libraryTarget: "umd", // ['var', 'this', 'commonjs', 'commonjs2', 'amd', 'umd']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[contenthash].[ext]",
							outputPath: "static/img",
							esModule: false,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".js", ".vue", ".json"],

		alias: {
			"@src": path.join(__dirname, "src"),
			vue: "vue/dist/vue.js",
		},
	},
	externals: {},
	target: "web",
	plugins: [
		new HtmlWebpackPlugin({
			title: "My App",
			template: "./index.html",
		}),
		new VueLoaderPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserJSPlugin()],
	},
	devtool: "cheap-eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, "./dist"),
		publicPath: "/",
		historyApiFallback: true,
		host: "localhost",
		overlay: true,
		port: 8080,
		stats: "errors-only",
	},
};
