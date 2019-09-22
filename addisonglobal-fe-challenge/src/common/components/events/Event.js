import React from 'react';
import PropTypes from 'prop-types';

import './Event.scss';

import Market from './Market';

const renderMarket = (market) => (
	<li className="event__market__item" key={market.id}>
		<Market {...market} />
	</li>
);

const Event = ({ name, markets = [] }) => {
	return (
		markets.length > 0 && (
			<section className="event">
				<h3 className="event__title">{name}</h3>
				<ul className="event__market-wrapper">
					{markets.map(renderMarket)}
				</ul>
			</section>
		)
	);
};

Event.propTypes = {
	name: PropTypes.string,
	markets: PropTypes.arrayOf(PropTypes.object)
};

export default Event;
