const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect(
	process.env.MONGODB_URL,
	{ useNewUrlParser: true },
);
