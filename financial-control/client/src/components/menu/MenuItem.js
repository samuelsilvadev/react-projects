import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

export function MenuItem(props) {
	const { path, label, icon, className } = props;

	return (
		<li className={ className }>
			<Link to ={ path }>
				{ icon &&
					<span>{ icon }</span>
				}
				{ label }
			</Link>
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
