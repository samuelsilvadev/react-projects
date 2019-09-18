import React from 'react';

import './Event.scss';

const Event = ({ name, markets = [] }) => {
	return (
		markets.length > 0 && (
			<section className="event">
				<h3 className="event__title">{name}</h3>
				<ul />
			</section>
		)
	);
};

export default Event;
