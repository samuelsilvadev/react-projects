const path = require('path');

module.exports = {
	webpack: (config, options) => {
		config.resolve.alias['@components'] = path.resolve(
			__dirname,
			'./components'
		);
		config.resolve.alias['@icons'] = path.resolve(__dirname, './icons');
		config.resolve.alias['@styles'] = path.resolve(__dirname, './styles');

		return config;
	}
};
