import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Button, Ul } from './MenuTree.style';

export function MenuTree(props) {
	const { label, children } = props;

	const [isOpen, setOpen] = useState(false);

	const _handleClick = useCallback(() => {
		setOpen((wasOpen) => !wasOpen);
	}, []);

	return (
		<li>
			<Button onClick={ _handleClick }>{ label }</Button>
			{
				isOpen &&
				<Ul>
					{ children }
				</Ul>
			}
		</li>
	);
}

MenuTree.propTypes = {
	label: PropTypes.string,
	children: PropTypes.node,
};

export default MenuTree;
