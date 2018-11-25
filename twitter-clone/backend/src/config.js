const env = process.env.NODE_ENV || 'dev';

const dev = {
	app: {
		port: 3000,
	},
	db: {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		name: process.env.DB_NAME,
	},
};

const test = {
	app: {
		port: 3001,
	},
	db: {
		host: process.env.DB_TEST_HOST,
		port: process.env.DB_TEST_PORT,
		name: process.env.DB_TEST_NAME,
	},
};

const config = {
	dev,
	test,
};

module.exports = config[env];
