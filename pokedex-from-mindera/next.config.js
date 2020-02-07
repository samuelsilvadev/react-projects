const path = require('path');

module.exports = {
	webpack: (config, { defaultLoaders }) => {
		config.module.rules.push({
			test: /\.css$/,
			use: [
				defaultLoaders.babel,
				{
					loader: require('styled-jsx/webpack').loader,
					options: {
						type: (fileName, options) =>
							options.query.type || 'scoped'
					}
				}
			]
		});

		config.resolve.alias['@components'] = path.resolve(
			__dirname,
			'./components'
		);
		config.resolve.alias['@icons'] = path.resolve(__dirname, './icons');
		config.resolve.alias['@styles'] = path.resolve(__dirname, './styles');

		return config;
	}
};
