import React from 'react';

import './SubmitButton.css';

export const SubmitButton = ({ text, ...remainingProps }) => {
	return (
		<button className="submit-button" type="submit" { ...remainingProps }>
			<span>{ text }</span>
		</button>
	);
};

export default SubmitButton;
