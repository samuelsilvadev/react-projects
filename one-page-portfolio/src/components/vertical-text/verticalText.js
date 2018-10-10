import React from 'react';

import './verticalText.css';

const VerticalText = ({ children, ...restProps }) => {
	return (
		<h1 className="verticalText" { ...restProps } >{ children }</h1>
	)
};

export default VerticalText;
