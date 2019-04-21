const restful = require('node-restful');
const { mongoose } = restful;

const debtSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	value: {
		type: Number,
		min: 0,
		required: true,
	},
	status: {
		type: String,
		required: false,
		uppercase: true,
		enum: [
			'PAID',
			'WAITING',
			'SCHEDULED',
		],
	},
});

module.exports = debtSchema;
