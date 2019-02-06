import React, { Component } from 'react';

import Header from '../header/Header';
import Order from '../order/Order';
import Inventory from '../inventory/Inventory';
import Fish from '../fish/Fish';

import base from '../../services/base';
import { saveState, loadState } from '../../services/localStorage';

import fishes from './../../data/fishes-mock';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fishes: {},
			orders: {}
		};

		const { match: { params: { id } } = {} } = props;

		this.storeId = id;
		this.keyStorage =  `orders-${id}`;
	}

	componentDidMount() {
		const { storeId } = this;
		
		this.ref = base.syncState(`${storeId}/fishes`, {
			context: this,
			state: 'fishes',
			then: this._afterSync,
		});
	}

	componentDidUpdate() {
		const { orders } = this.state;
		const isEmpty = !Object.keys(orders).length;
		
		if (!isEmpty) {
			saveState(this.keyStorage, orders)
		}
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
	};

	_onAddNewOrder = (key) => {
		this.setState((prevState) => ({
			orders: {
				...prevState.orders,
				[key]: prevState.orders[key] + 1 || 1
			}
		}));
	};

	_afterSync = () => {
		const ordersStorage = loadState(this.keyStorage);
		
		if (ordersStorage) {
			this.setState({
				orders: ordersStorage,
			});
		}
	};
}

export default App;
