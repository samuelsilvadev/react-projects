import React from 'react';

import Button from './../button'

import './header.css';

const Header = () => {
	return (
		<header className="main-header">
			<h1 className="main-header__title">Samuel Silva</h1>
			<nav className="main-nav">
				<a className="main-nav__link" href="#">About</a>
				<a className="main-nav__link" href="#">Portfolio</a>
				<Button>
					Download CV
				</Button>
			</nav>
		</header>
	);
}

export default Header;
