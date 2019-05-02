import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { StyledHeader, Button, Link, StyledBurgerIcon } from './Header.style';

export function Header(props) {
	const { handleClick } = props;

	return (
		<StyledHeader>
			<Button type="button" onClick={ handleClick }>
				<StyledBurgerIcon />
			</Button>
			<Link href="#">My Money</Link>
		</StyledHeader>
	);
}

Header.propTypes = {
	handleClick: PropTypes.func,
};

Header.defaultProps = {
	handleClick: noop,
};

export default Header;
