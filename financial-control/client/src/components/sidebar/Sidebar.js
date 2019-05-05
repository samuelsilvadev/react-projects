import React from 'react';

import Menu from '@components/menu';

import { Aside } from './Sidebar.style';

export function Sidebar(props) {
	return (
		<Aside>
			<Menu />
		</Aside>
	);
}

export default Sidebar;
