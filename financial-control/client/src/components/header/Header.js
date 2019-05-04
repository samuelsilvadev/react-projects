import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { StyledHeader, Button, Link, StyledBurgerIcon } from './Header.style';

export function Header(props) {
	const { onClick } = props;

	return (
		<StyledHeader>
			<Button type="button" onClick={ onClick }>
				<StyledBurgerIcon />
			</Button>
			<Link href="#">My Money</Link>
		</StyledHeader>
	);
}

Header.propTypes = {
	onClick: PropTypes.func,
};

Header.defaultProps = {
	onClick: noop,
};

export default Header;
