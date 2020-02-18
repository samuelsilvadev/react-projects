const path = require('path');

module.exports = {
	webpack: (config, options) => {
		config.resolve.alias['@components'] = path.resolve(
			__dirname,
			'./pages/components'
		);
		config.resolve.alias['@services'] = path.resolve(
			__dirname,
			'./pages/services'
		);
		config.resolve.alias['@icons'] = path.resolve(
			__dirname,
			'./pages/icons'
		);
		config.resolve.alias['@styles'] = path.resolve(
			__dirname,
			'./pages/styles'
		);

		return config;
	}
};
