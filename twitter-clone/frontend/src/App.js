'use strict';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Timeline } from './pages';

import './App.css';

const App = React.createClass({
	render: function render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={ Login }/>
					<Route path="/timeline" component={ Timeline }/>
				</Switch>
			</BrowserRouter>
		);
	},
});

export default App;
