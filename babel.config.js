module.exports = function (api) {
	api.cache(true);

	const presets = [
		[
			"@babel/preset-env",
			{
				targets: "> 0.2%, not dead",
				useBuiltIns: "usage",
				corejs: "3",
				modules: false,
			},
			"@babel/preset-typescript",
		],
	];

	const plugins = [["@babel/plugin-proposal-class-properties", {loose: true}]];

	return {
		presets,
		plugins,
	};
};
