import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

import Header from './components/header/Header';

import './App.scss';

const App = () => (
	<>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</>
);

export default App;
