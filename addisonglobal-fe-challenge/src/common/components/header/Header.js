import React from 'react';

import { BurgerIcon } from '../icons';

import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<BurgerIcon className="header__burger" />
		</header>
	);
};

export default Header;
