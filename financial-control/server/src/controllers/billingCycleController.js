const BillingCycle = require('./../models/billingCycle');
const errorHandler = require('./../middlewares/errorHandler');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.after('post', errorHandler).after('put', errorHandler);

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

// eslint-disable-next-line no-unused-vars
BillingCycle.route('summary', (req, res, next) => {
	BillingCycle.aggregate([{
		$project: {
			credit: {
				$sum: '$credits.value',
			},
			debt: {
				$sum: '$debts.value',
			},
		},
	}, {
		$group: {
			_id: null,
			credit: { $sum: '$credit' },
			debt: { $sum: '$debt' },
		},
	}, {
		$project: {
			_id: 0,
			credit: 1,
			debt: 1,
		},
	}], (error, result) => {
		if (error) {
			res.status(500).json({ errors: [error] });
		} else {
			res.json(result[0] || { credit: 0, debt: 0 });
		}
	});
});

module.exports = BillingCycle;
