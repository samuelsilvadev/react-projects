const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { parseErrors } = require('./../middlewares/errorHandler');

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /.{6,12}/g;

const hasAllRequiredFields = (fields = []) => {
	for (let index = 0; index < fields.length; index++) {
		if (!fields[index]) {
			return false;
		}
	}

	return true;
};

const sendErrorsFromDb = (response, dbErrors) => {
	const errors = parseErrors(dbErrors);

	return response.status(400).json({ errors });
};

const getNewToken = user => jwt.sign(user.toJSON(), process.env.AUTH_SECRET, {
	expiresIn: '1 day',
});

const signIn = (req, res) => {
	const { email = '', password = '' } = req.body;

	const errorMessage = 'Email and password are required';
	const canProceed = hasAllRequiredFields([email, password]);

	if (!canProceed) {
		return res.status(400).send({ errors: [errorMessage] });
	}

	User.findOne({ email }, (err, user) => {
		if (err) {
			return sendErrorsFromDb(res, err);
		}

		if (user && bcrypt.compareSync(password, user.password)) {
			const token = getNewToken(user);
			const { name, email } = user;

			return res.json({ name, email, token });
		}

		return res.status(400).send({ errors: ['User or password invalids'] });
	});
};

const signUp = (req, res, next) => {
	const {
		name, email, password, confirmPassword,
	} = req.body;

	const errorMessage = 'All the following fields are required: \'name\', \'email\', \'password\', \'confirmPassword\'';
	const canProceed = hasAllRequiredFields([name, email, password, confirmPassword]);

	if (!canProceed) {
		return res.status(400).send({ errors: [errorMessage] });
	}

	if (!email.match(EMAIL_REGEX)) {
		return res.status(400).send({ errors: ['Invalid Email'] });
	}

	if (!password.match(PASSWORD_REGEX)) {
		return res.status(400).send({ errors: ['Invalid Password'] });
	}

	const salt = bcrypt.genSaltSync();
	const passwordHash = bcrypt.hashSync(password, salt);

	if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
		return res.status(400).send({ errors: ['Passwords didn\'t match'] });
	}

	User.findOne({ email }, (err, user) => {
		if (err) {
			return sendErrorsFromDb(res, err);
		} if (user) {
			return res.status(400).send({ errors: ['User already exists'] });
		}

		const newUser = new User({ name, email, password: passwordHash });

		newUser.save((err) => {
			if (err) {
				return sendErrorsFromDb(res, err);
			}

			signIn(req, res, next);
		});
	});
};

const validateToken = (req, res) => {
	const { token = '' } = req.body;

	jwt.verify(token, process.env.AUTH_SECRET, err => res.status(200).send({ valid: !err }));
};

module.exports = {
	signIn,
	signUp,
	validateToken,
};
