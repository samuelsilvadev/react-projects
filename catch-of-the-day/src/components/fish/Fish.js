import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './../button';

import './Fish.css';

const Fish = ({ tag: Tag, details: { image, name, price, desc, status } }) => {

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
				className={ buttonClassNames }
				text={ buttonText }
				disabled={ !isAvailable } />
		</Tag>
	);
};

Fish.propTypes = {
	tag: PropTypes.string,
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
