const express = require('express');
const BillingCycleController = require('./controllers/billingCycleController');

function buildRoutes(server) {
	const router = express.Router();

	server.use('/api', router);

	BillingCycleController.register(router, '/billing-cycle');
}

module.exports = buildRoutes;
