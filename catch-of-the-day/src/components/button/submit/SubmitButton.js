import React from 'react';

import Button from './../regular/Button';

import './SubmitButton.css';

export const SubmitButton = ({ text, className, ...remainingProps }) => {
	const classNames = `submit-button ${className}`;

	return (
		<Button className={ classNames } text={ text } type="submit" { ...remainingProps } />
	);
};

SubmitButton.defaultProps = {
	className: '',
};

export default SubmitButton;
