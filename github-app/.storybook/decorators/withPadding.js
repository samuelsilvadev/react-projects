import React from 'react';

const STYLE = {
	padding: '20px',
};

const withPadding = (story) => {
	return (
		<div style={ STYLE }>
			{ story() }
		</div>
	);
}

export default withPadding;
