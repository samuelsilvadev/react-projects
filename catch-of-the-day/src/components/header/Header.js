import React from 'react';

import './Header.css';

const Header = ({ className }) => {
	const wrapperClasses = `${className} header`;

	return (
		<header className={ wrapperClasses }>
			<h1 className='header__title'>
				Catch
				<span className='ofThe'>
					<span className='of'>of</span>
					<span className='the'>the</span>
				</span>
				day
			</h1>
			<h2 className='header__subtitle'>
				<span>Fresh seafood market</span>
			</h2>
		</header>
	);
};

export default Header;
