import React from 'react';

import { Navigation, LinkWrapper, Link } from './Header.style';

const Header = () => (
	<header>
		<Navigation>
			<LinkWrapper>
				<Link href="/">
					Instagram
				</Link>
			</LinkWrapper>
		</Navigation>
	</header>
);

export default Header;
