import React from 'react';

import { Pokeball, Search } from '../icons'

const Header = () => (
	<>
		<style jsx>
			{
				`
				.header {
					height: 55px;
					box-shadow: 0 0 2px 0 var(--light-sky-blue);
					background-color: var(--white);
				}

				nav, ul {
					display: flex;
				}

				nav {
					align-items: center;
					height: 100%;
					justify-content: space-between;
					padding: 0 20px;
				}

				li:not(:last-child) {
					margin-right: 22px;
				}

				a {
					font-family: Lato;
					font-size: 16px;
					line-height: normal;
					letter-spacing: 0.13px;
					color: var(--metallic-blue);
					text-decoration: none;
				}

				a.active {
					background-color: var(--greeny-blue);
					color: var(--white);
					padding: 1px 7px 3px;
				}
			`
			}
		</style>
		<header className="header">
			<nav>
				<Pokeball />
				<ul>
					<li><a className="active" href="#">Explorer</a></li>
					<li><a href="#">Favorites</a></li>
				</ul>
				<Search />
			</nav>
		</header>
	</>
);

export default Header;
