import React from 'react';

const Plus = (props) => (
	<svg
		viewBox="0 0 24 24"
		width="1em"
		height="1em"
		aria-hidden="true"
		{...props}
	>
		<path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z" />
	</svg>
);

export default Plus;
