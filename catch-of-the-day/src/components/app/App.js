import React, { Component } from 'react';

import Header from '../header/Header';
import Order from '../order/Order';
import Inventory from '../inventory/Inventory';

import './App.css';

class App extends Component {
	state = {
		fishes: {}
	};

	render() {
		return (
			<main className="main">
				<Header className="header" />
				<Order  className="order" />
				<Inventory  className="inventory" onAddFish={ this._onAddFish } />
			</main>
		);
	}

	_onAddFish = (fish) => {
		const timestamp = Date.now();
		
		this.setState((prevState) => ({
			fishes: {
				...prevState.fishes,
				[`fish-${timestamp}`]: fish
			}
		}));
	};
}

export default App;
