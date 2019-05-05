import React from 'react';
import PropTypes from 'prop-types';

export function MenuItem(props) {
	const { path, label, icon, className } = props;

	return (
		<li className={ className }>
			<a href={ path }>
				{ icon &&
					<span>{ icon }</span>
				}
				{ label }
			</a>
		</li>
	);
}

MenuItem.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	path: PropTypes.string,
};

MenuItem.defaultProps = {
	path: '#',
};

export default MenuItem;
