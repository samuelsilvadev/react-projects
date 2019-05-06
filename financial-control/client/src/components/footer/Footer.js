import React from 'react';
import PropTypes from 'prop-types';

import { StyledFooter } from './Footer.style';

export function Footer(props) {
	const { className } = props;

	return (
		<StyledFooter className={ className }>
			<strong>
				Copyright &copy; { new Date().getFullYear() }
				<a href="#" target="_blank">Some company</a>
			</strong>
		</StyledFooter>
	);
}

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
