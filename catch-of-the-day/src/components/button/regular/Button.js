import React from 'react';

import './../css/Button.css';

export const Button = ({ text, className, ...remainingProps }) => {
	const classNames = `button ${className}`;

	return (
		<button className={ classNames } { ...remainingProps }>
			<span>{ text }</span>
		</button>
	);
};

Button.defaultProps = {
	className: '',
};

export default Button;
