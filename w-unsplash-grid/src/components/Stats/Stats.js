import React from 'react'

import './Stats.css';

function Stats(props) {
	const { stats } = props;

	if (!stats) {
		return <span className="stats">Loading...</span>
	}

	return (
		<span className="stats">
			{stats.error && 'Error!'}
			{stats.isLoading && 'Loading...'}
			{stats.downloads !== null && stats.downloads}
		</span>
	);
}

export default Stats;
