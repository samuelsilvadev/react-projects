const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
	email: {
		type: String, required: true, lowercase: true, index: true,
	},
	passwordHash: { type: String, required: true },
}, { timestamps: true });

schema.methods.isValidPassword = function isValidPassword(password) {
	return bcrypt.compareSync(password, this.passwordHash);
};

module.exports = mongoose.model('User', schema);
