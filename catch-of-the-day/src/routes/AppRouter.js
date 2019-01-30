import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../components/app/App';
import StorePicker from '../components/store-picker/StorePicker';

const AppRouter = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={ StorePicker } />
			<Route path="/store/:id" component={ App } />
		</Fragment>
	</Router>
);


export default AppRouter;
