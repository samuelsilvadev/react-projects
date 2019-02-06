import React, { Component } from 'react';

import Header from '../header/Header';
import Order from '../order/Order';
import Inventory from '../inventory/Inventory';
import Fish from '../fish/Fish';

import base from '../../base';

import fishes from './../../data/fishes-mock';

import './App.css';

class App extends Component {
	state = {
		fishes: {},
		orders: {}
	};

	componentWillMount() {
		const { match: { params: { id } } = {} } = this.props;

		this.ref = base.syncState(`${id}/fishes`, {
			context: this,
			state: 'fishes',
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	render() {
		const { fishes, orders } = this.state;

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
				<Order
					className="order"
					orders={ orders }
					fishes={ fishes } />
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
			<Fish
				key={ key }
				index={ key }
				tag="li"
				details={ fishDetails }
				onAddOrder={ this._onAddNewOrder } />
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

	_onAddNewOrder = (key) => {
		this.setState((prevState) => ({
			orders: {
				...prevState.orders,
				[key]: prevState.orders[key] + 1 || 1
			}
		}));
	}
}

export default App;
