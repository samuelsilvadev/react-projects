import React from 'react';

import { useTabs } from '@shared/context';

function TabBody(props) {
	const { children } = props;
	const { selected } = useTabs();

	return React.Children.map(children, (child) => {
		const isToRender = child.props.id === selected;

		return isToRender ? child : null;
	});
}

export default TabBody;
