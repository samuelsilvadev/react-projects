import React from 'react';

export function BurgerMenu(props) {
	return (
		<svg viewBox="0 0 48 48" width="1em" height="1em" { ...props }>
			<g fill="#607d8b">
				<path d="M6 22h36v4H6zM6 10h36v4H6zM6 34h36v4H6z" />
			</g>
		</svg>
	);
}

export default BurgerMenu;
