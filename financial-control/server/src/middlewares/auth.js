const jwt = require('jsonwebtoken');

function auth(req, res, next) {
	if (req.method === 'OPTIONS') {
		next();
	} else {
		const { body, query, headers } = req;

		const token = body.token || query.token || headers.authorization;

		if (!token) {
			return res.status(403).send({ errors: ['No token provided'] });
		}

		jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
			if (err) {
				return res.status(403).send({ errors: ['Failed to authenticate token'] });
			}

			req.decoded = decoded;
			next();
		});
	}
}
module.exports = auth;
