import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

function Auth() {
	return (
		<Switch>
			<Route exact path="/sign-in" component={SignIn} />
			<Route exact path="/sign-up" component={SignUp} />
			<Redirect from="*" to="/sign-in" />
		</Switch>
	);
}

export default Auth;
