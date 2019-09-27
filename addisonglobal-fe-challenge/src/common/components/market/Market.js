import React from 'react';
import PropTypes from 'prop-types';

import './Market.scss';

const renderButton = (selection) => (
	<button className="market__btn" key={selection.id} type="button">
		<span>{selection.name}</span>
		<span>{selection.price}</span>
	</button>
);

function Market({ name, selections }) {
	return (
		<section className="market">
			<h4 className="market__title">{name}</h4>
			<div className="market__selections-wrapper">
				{selections.map(renderButton)}
			</div>
		</section>
	);
}

Market.propTypes = {
	name: PropTypes.string.isRequired,
	selections: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number
		})
	)
};

Market.defaultProps = {
	selections: []
};

export default Market;
