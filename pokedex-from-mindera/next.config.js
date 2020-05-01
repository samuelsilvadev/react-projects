const path = require('path');

module.exports = {
	webpack: (config, options) => {
		config.resolve.alias['@components'] = path.resolve(
			__dirname,
			'./src/components'
		);
		config.resolve.alias['@services'] = path.resolve(
			__dirname,
			'./src/services'
		);
		config.resolve.alias['@icons'] = path.resolve(__dirname, './src/icons');
		config.resolve.alias['@styles'] = path.resolve(
			__dirname,
			'./src/styles'
		);

		return config;
	},
};
