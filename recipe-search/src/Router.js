import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import { RecipeDetails } from './components';

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={App} exact />
				<Route path="/recipe/:id" component={RecipeDetails} exact />
			</Switch>
		</BrowserRouter>
	)
}

export default Router;
