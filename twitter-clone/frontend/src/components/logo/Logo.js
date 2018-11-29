'use strict';

import React from 'react';

import logoSrc from '../../../assets/logo-twitter.svg';

const Logo = function Logo({ ...remainingProps }) {
	return (
		<img
			src={logoSrc}
			alt='Twitter Brand'
			{ ...remainingProps }/>
	);
};

export default Logo;
