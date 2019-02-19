import React from 'react';

import './Filter.css';

export const Filter = () => {
	return (
		<section>
			<h2>Filter by:</h2>
			<button className='btn' disabled>All</button>
			<button className='btn'>Completed</button>
			<button className='btn'>Todo</button>
		</section>
	);
}

export default Filter;
