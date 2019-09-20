import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages';

import Header from './components/header/Header';

import './App.scss';

const App = () => (
	<>
		<Header />
		<main className="main">
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</main>
	</>
);

export default App;
