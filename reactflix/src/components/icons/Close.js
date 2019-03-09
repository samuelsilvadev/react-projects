import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ className, onClick }) => (
	<svg
		className={ className }
		onClick={ onClick }
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fillRule="evenodd"
		clipRule="evenodd">
		<path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
	</svg>
);

Close.defaultProps = {
	className: '',
	onClick: () => {},
};

Close.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default Close;
