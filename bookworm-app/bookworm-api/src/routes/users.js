const express = require('express');
const User = require('./../models/User');
const parseErrors = require('./../utils/parseErrors');

const router = express.Router();

router.post('/', (req, resp) => {
	const { email, password } = req.body.user;
	const user = new User({ email });
	user.setPassword(password);
	user.save()
		.then(us => resp.status(200).json({ user: us.toAuthJson() }))
		.catch(err => resp.status(400).json({ errors: parseErrors(err.errors) }));
});

module.exports = router;
