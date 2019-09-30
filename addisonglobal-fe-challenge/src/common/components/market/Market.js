import React from 'react';
import PropTypes from 'prop-types';

import { useAsideContext } from '../../contexts/AsideContext';

import './Market.scss';

const Market = ({ name, selections }) => {
	const { handleOpen } = useAsideContext();

	const renderButton = (selection) => (
		<button
			className="market__btn"
			key={selection.id}
			type="button"
			onClick={handleOpen}
		>
			<span>{selection.name}</span>
			<span>{selection.price}</span>
		</button>
	);

	return (
		<section className="market">
			<h4 className="market__title">{name}</h4>
			<div className="market__selections-wrapper">
				{selections.map(renderButton)}
			</div>
		</section>
	);
};

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
