import React from 'react';
import PropTypes from 'prop-types';

import { StyledFooter, Span } from './Footer.style';

export function Footer(props) {
	const { className } = props;

	return (
		<StyledFooter className={ className }>
			<strong>
				<Span>	
					Copyright &copy; { new Date().getFullYear() }
				</Span>
				<a href="#" target="_blank">Some company</a>
			</strong>
		</StyledFooter>
	);
}

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
