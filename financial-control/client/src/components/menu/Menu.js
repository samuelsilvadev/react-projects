import React from 'react';

import { Ul, StyledMenuItem } from './Menu.style';
import MenuTree from './MenuTree';

export function Menu() {
	return (
		<Ul>
			<StyledMenuItem path="/" label="Dashboard" />
			<MenuTree label="Billing Cycles">
				<StyledMenuItem path="/billing-cycles" label="Register" />
				<StyledMenuItem path="#" label="List" />
			</MenuTree>
		</Ul>
	);
}

export default Menu;
