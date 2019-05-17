import React from 'react';

function Tabs(props) {
	const { children, ...remainingProps } = props;

	return (
		<div { ...remainingProps }>
			{ children }
		</div>
	)
}

export default Tabs;
