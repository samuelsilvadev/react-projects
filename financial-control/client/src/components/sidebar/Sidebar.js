import React from 'react';
import PropTypes from 'prop-types';

import Menu from '@components/menu';

import { Aside } from './Sidebar.style';

export function Sidebar(props) {
	const { className } = props;

	return (
		<Aside className={ className }>
			<Menu />
		</Aside>
	);
}

Sidebar.propTypes = {
	className: PropTypes.string,
};

export default Sidebar;
