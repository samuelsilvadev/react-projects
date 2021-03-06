import React from 'react';
import PropTypes from 'prop-types';

const BurgerIcon = ({ className }) => (
	<svg
		aria-hidden="true"
		viewBox="0 0 448 512"
		width="1em"
		height="1em"
		className={className}
	>
		<path
			fill="currentColor"
			// eslint-disable-next-line max-len
			d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
		/>
	</svg>
);

BurgerIcon.propTypes = {
	className: PropTypes.string
};

BurgerIcon.defaultProps = {
	className: ''
};

export default BurgerIcon;
