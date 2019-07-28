const express = require('express');
const BillingCycleController = require('./controllers/billingCycleController');
const AuthService = require('./services/authService');
const authMiddleware = require('./middlewares/auth');

function buildRoutes(server) {
	const protectedRouter = express.Router();
	const unProtectedRouter = express.Router();

	server.use('/api', protectedRouter);
	protectedRouter.use(authMiddleware);

	BillingCycleController.register(protectedRouter, '/billing-cycle');

	server.use('/o-api', unProtectedRouter);
	unProtectedRouter.post('/sign-in', AuthService.signIn);
	unProtectedRouter.post('/sign-up', AuthService.signUp);
	unProtectedRouter.post('/validate-token', AuthService.validateToken);
}

module.exports = buildRoutes;
