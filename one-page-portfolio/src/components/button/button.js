import React from 'react';

import './button.css';

const Button = ({ children, ...restProps }) => {
	return (
		<button className="btn" { ...restProps } >
			{ children }
		</button>
	); 
};

export default Button;
