const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: process.env.NODE_ENV, // ['development', 'production']
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "../server/public/js"),
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
		],
	},
	resolve: {
		extensions: [".js", ".vue", ".json"],

		alias: {
			"@src": path.join(__dirname, "src"),
		},
	},
	externals: {},
	target: "web",
	plugins: [
		new HtmlWebpackPlugin({
			title: "My App",
			template: "../server/public/index.html",
		}),
		new VueLoaderPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserJSPlugin()],
	},
	devtool: "cheap-eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, "../server/public/js"),
		publicPath: "/",
		host: "localhost",
		overlay: true,
		port: 8080,
		stats: "errors-only",
	},
};
