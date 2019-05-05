import React from 'react';

import { Ul, StyledMenuItem } from './Menu.style';
import MenuTree from './MenuTree';

export function Menu(props) {
	return (
		<Ul>
			<StyledMenuItem path="#" label="Dashboard" />
			<StyledMenuItem path="#" label="Profile" />
			<MenuTree label="Billing Cycles">
				<StyledMenuItem path="#" label="Register" />
				<StyledMenuItem path="#" label="List" />
			</MenuTree>
		</Ul>
	);
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
