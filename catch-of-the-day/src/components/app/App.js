import React, { Component } from 'react';

import Header from '../header/Header';
import Order from '../order/Order';
import Inventory from '../inventory/Inventory';
import Fish from '../fish/Fish';

import fishes from './../../data/fishes-mock';

import './App.css';

class App extends Component {
	state = {
		fishes: {}
	};

	render() {
		const { fishes } = this.state;

		return (
			<main className="main">
				<section className="header">
					<Header />
					<ul className="list-of-fishes">
						{
							Object
								.keys(fishes)
								.map(this._renderFish, this)
						}
					</ul>
				</section>
				<Order className="order" />
				<Inventory
					className="inventory"
					onAddFish={ this._onAddFish }
					loadFishes={ this._loadFishesData }/>
			</main>
		);
	}

	_renderFish(key) {
		const fishDetails = this.state.fishes[key];
		
		return (
			<Fish key={ key } tag="li" details={ fishDetails } />
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

	_loadFishesData = () => {
		this.setState((prevState) => ({
			fishes: {
				...prevState.fishes,
				...fishes,
			}
		}));
	}
}

export default App;
