import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Order.css';

class Order extends React.Component {
	render() {
		const { className, orders } = this.props;
		
		const ordersKeys = Object.keys(orders);

		return (
			<section className={ className }>
				<h2>Orders</h2>
				<ul className="orders-list">
					{
						ordersKeys.map(this._renderOrderItem, this)
					}
					<li className="orders-list__item orders-list__item--total">
						<strong>Total:</strong>
						{ this._getTotalPrice() }
					</li>
				</ul>
			</section>
		);
	}

	_renderOrderItem(key) {
		const { orders, fishes } = this.props;

		const fish = fishes[key];
		const count = orders[key];
		const isAvailable = fish && fish.status === 'available';

		const content = !isAvailable ?
			<p>Sorry, Fish is no longer available</p> :
			<Fragment>
				<p>{ count }lbs { fish.name }</p>
				<p>{ count * fish.price }</p>
			</Fragment>;

		return (
			<li className="orders-list__item" key={ key }>
				{ content }
			</li>
		);
	}

	_getTotalPrice = () => {
		const { orders, fishes } = this.props;

		const ordersKeys = Object.keys(orders);
		
		const total = ordersKeys.reduce((prevValue, key) => {
			const fish = fishes[key];
			const count = orders[key];
			const isAvailable = fish && fish.status === 'available';

			if (isAvailable) {
				return prevValue + (count * fish.price || 0);
			}

			return prevValue;
		}, 0);

		return total;
	}
}

Order.propTypes = {
	orders: PropTypes.object,
	fishes: PropTypes.object,
};

export default Order;
