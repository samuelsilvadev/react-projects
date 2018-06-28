const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', (req, resp) => {
	const { credentials } = req.body;
	User.findOne({ email: credentials.email })
		.then((user) => {
			if (user && user.isValidPassword(credentials.password)) {
				resp.status(200).json({ success: true, user: user.toAuthJson() });
			} else {
				resp.status(400).json({ errors: { global: 'Invalid credentials' } });
			}
		});
});

module.exports = router;
