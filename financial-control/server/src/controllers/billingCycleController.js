const BillingCycle = require('./../models/billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

// eslint-disable-next-line no-unused-vars
BillingCycle.route('count', (req, res, _next) => {
	BillingCycle.count((error, value) => {
		if (error) {
			res.status(500).json({ errors: [error] });
		} else {
			res.json({ value });
		}
	});
});

module.exports = BillingCycle;
