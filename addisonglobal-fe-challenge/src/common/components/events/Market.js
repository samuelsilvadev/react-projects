import React from 'react';
import PropTypes from 'prop-types';

import './Market.scss';

const renderButton = (selection) => (
	<button key={selection.id} type="button">
		{selection.name}
	</button>
);

function Market({ name, selections }) {
	return (
		<section>
			<h4 className="market__title">{name}</h4>
			{selections.map(renderButton)}
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
