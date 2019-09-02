import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Recipes } from './Recipes';
import { RecipeDetails } from './components';

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Recipes} exact />
				<Route path="/recipe/:id" component={RecipeDetails} exact />
			</Switch>
		</BrowserRouter>
	)
}

export default Router;
