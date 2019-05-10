import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { SidebarContext } from '@shared/context';

import { StyledHeader, Button, Link, StyledBurgerIcon } from './Header.style';

export function Header(props) {
	return (
		<SidebarContext.Consumer>
			{
				({ toggleOpen }) => (
					<StyledHeader>
						<Button type="button" onClick={ toggleOpen }>
							<StyledBurgerIcon />
						</Button>
						<Link href="#">My Money</Link>
					</StyledHeader>
				)
			}
		</SidebarContext.Consumer>
	);
}

Header.propTypes = {
	onClick: PropTypes.func,
};

Header.defaultProps = {
	onClick: noop,
};

export default Header;
