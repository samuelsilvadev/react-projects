const express = require('express');
const User = require('./../models/User');
const parseErrors = require('./../utils/parseErrors');
const sendConfirmationEmail = require('./../mailer');
const router = express.Router();

router.post('/', (req, resp) => {
	const { email, password } = req.body.user;
	const user = new User({ email });
	user.setPassword(password);
	user.setConfirmationToken();
	user.save()
		.then((userRecord) => {
			sendConfirmationEmail(userRecord);
			resp.status(200).json({ user: userRecord.toAuthJson() });
		})
		.catch(err => resp.status(400).json({ errors: parseErrors(err.errors) }));
});

module.exports = router;
