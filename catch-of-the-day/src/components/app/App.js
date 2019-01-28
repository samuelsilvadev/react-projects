import React, { Component } from 'react';

import Header from '../header/Header';
import Order from '../order/Order';
import Inventory from '../inventory/Inventory';

import './App.css';

class App extends Component {
	render() {
		return (
			<main className="main">
				<Header className="header" />
				<Order  className="order" />
				<Inventory  className="inventory"/>
			</main>
		);
	}
}

export default App;
