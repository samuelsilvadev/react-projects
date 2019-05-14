const path = require('path');

module.exports = {
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, '../', 'src/components/'),
			'@shared': path.resolve(__dirname, '../', 'src/shared/'),
		},
	},
};
