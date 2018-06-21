const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
	email: {
		type: String, required: true, lowercase: true, index: true,
	},
	passwordHash: { type: String, required: true },
}, { timestamps: true });

schema.methods.isValidPassword = function isValidPassword(password) {
	return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.generateJWT = function generateJWT() {
	return jwt.sign(
		{
			email: this.email,
		},
		process.env.JWT_SECRET_KEY,
	);
};

schema.methods.toAuthJson = function toAuthJson() {
	return {
		email: this.email,
		token: this.generateJWT(),
	};
};

module.exports = mongoose.model('User', schema);
