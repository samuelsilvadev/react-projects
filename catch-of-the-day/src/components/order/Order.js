import React from 'react';
import PropTypes from 'prop-types';

import './Order.css';

class Order extends React.Component {
	render() {
		const { className } = this.props;

		return (
			<section className={ className }>
				<h2>Orders</h2>
				<ul className="orders-list">
					<li className="orders-list__item orders-list__item--total">
						<strong>Total:</strong>
						{ this._getTotalPrice() }
					</li>
				</ul>
			</section>
		);
	}

	_getTotalPrice = () => {
		const { orders, fishes } = this.props;

		const ordersKeys = Object.keys(orders);
		
		const total = ordersKeys.reduce((prevValue, key) => {
			const fish = fishes[key];
			const count = orders[key];
			const isAvailable = fish.status === 'available';

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
