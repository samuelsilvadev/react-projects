import React from 'react';

import { Aside } from './Sidebar.style';

export function Sidebar(props) {
	return (
		<Aside { ...props } />
	);
}

export default Sidebar;
