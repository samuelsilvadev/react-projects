const restful = require('node-restful');
const { mongoose } = restful;

const creditSchema = require('./credit');
const debtSchema = require('./debt');

const billingCycleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	month: {
		type: Number,
		min: 1,
		max: 12,
		required: true,
	},
	year: {
		type: Number,
		min: 1970,
		max: 4000,
		required: true,
	},
	credits: [creditSchema],
	debts: [debtSchema],
});

module.exports = restful.model('BillingCycle', billingCycleSchema);
