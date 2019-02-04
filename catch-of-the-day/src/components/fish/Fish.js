import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './../button';

import './Fish.css';

const Fish = ({ tag: Tag, details: { image, name, price, desc } }) => {
	return (
		<Tag className="fish">
			<img className="fish__image" src={ image } alt={ name }/>
			<p className="fish__name">
				{ name }
				<span>{ price }</span>
			</p>
			<p className="fish__desc">
				{ desc }
			</p>
			<Button className="fish__btn-add-to-order" text="Add To Order"/>
		</Tag>
	);
};

Fish.propTypes = {
	tag: PropTypes.string,
	details: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		price: PropTypes.string,
		desc: PropTypes.string,
	}),
};

Fish.defaultProps = {
	tag: 'div',
};

export default Fish;
