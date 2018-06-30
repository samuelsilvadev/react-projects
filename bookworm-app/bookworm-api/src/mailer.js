const nodemailer = require('nodemailer');

const from = '"bookworm" <info@bookworm.com>';

function setup() {
	return nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});
}

module.exports = function sendConfirmationEmail(user) {
	const transport = setup();
	const email = {
		from,
		to: user.email,
		subject: 'Welcome to bookworm',
		text: `
			Welcome to bookworm. Please confirm your email.

			${user.generateConfirmationUrl()}
		`,
	};

	transport.sendMail(email);
};
