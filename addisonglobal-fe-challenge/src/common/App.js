import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages';

import Header from './components/header/Header';
import BetSlip from './components/betslip';

import { useAsideContext, withAsideContext } from './contexts/AsideContext';

import './App.scss';

const App = () => {
	const { handleOpen, handleClose, isAsideVisible } = useAsideContext();

	return (
		<>
			<Header onAsideOpen={handleOpen} />
			<main className="main">
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
				<BetSlip open={isAsideVisible} onClose={handleClose} />
			</main>
		</>
	);
};

export default withAsideContext(App);
