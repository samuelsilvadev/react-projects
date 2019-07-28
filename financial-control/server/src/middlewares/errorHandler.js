function parseErrors(nodeRestfulErrors = {}) {
	const errors = [];

	const messages = Object.keys(nodeRestfulErrors).map(key => ({
		[key]: nodeRestfulErrors[key].message,
	}));

	return errors.concat(messages);
}

function errorHandler(req, res, next) {
	const { bundle } = res.locals;

	if (bundle.errors) {
		const errors = parseErrors(bundle.errors);

		res.status(500).json({ errors });
	} else {
		next();
	}
}

module.exports = { errorHandler, parseErrors };
