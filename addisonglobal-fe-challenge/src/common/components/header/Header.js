import React from 'react';
import PropTypes from 'prop-types';

import { BurgerIcon } from '../icons';

import './Header.scss';

const Header = ({ onAsideOpen }) => {
	return (
		<header className="header">
			<button
				className="header__button"
				type="button"
				onClick={onAsideOpen}
			>
				<BurgerIcon className="header__burger" />
			</button>
		</header>
	);
};

Header.propTypes = {
	onAsideOpen: PropTypes.func.isRequired
};

export default Header;
