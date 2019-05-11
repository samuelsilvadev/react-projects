import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from '@components/dashboard';
import BillingCycle from '@components/billing-cycle';

export function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Dashboard} />
			<Route exact path="/billing-cycles" component={BillingCycle} />
			<Redirect from="*" to="/" />
		</Switch>
	);
}

export default Routes;
