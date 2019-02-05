import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './../button';

import './Fish.css';

class Fish extends React.PureComponent {
	render() {
		const { tag: Tag, details: { image, name, price, desc, status }, onAddOrder, index: key } = this.props;

		const isAvailable = status === 'available';
		const buttonText = isAvailable ? 'Add To Order' : 'Sould out!'
		const buttonClassNames = isAvailable ? 'fish__btn-add-to-order' : 'fish__btn-add-to-order fish__btn-add-to-order--disabled'

		return (
			<Tag className="fish">
				<img className="fish__image" src={ image } alt={ name }/>
				<h2 className="fish__name">
					<span>{ name }</span>
					<span>{ price }</span>
				</h2>
				<p className="fish__desc">
					{ desc }
				</p>
				<Button
					onClick={ this._onHandleClick }
					className={ buttonClassNames }
					text={ buttonText }
					disabled={ !isAvailable } />
			</Tag>
		);
	}

	_onHandleClick = () => {
		const { onAddOrder, index } = this.props;

		onAddOrder(index);
	}
}

Fish.propTypes = {
	tag: PropTypes.string,
	index: PropTypes.any,
	onAddOrder: PropTypes.func,
	details: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		price: PropTypes.number,
		desc: PropTypes.string,
		status: PropTypes.string,
	}),
};

Fish.defaultProps = {
	tag: 'div',
};

export default Fish;
