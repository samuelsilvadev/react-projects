import React from 'react';
import css from 'styled-jsx/css';

import { Pokeball, Search } from '../icons';

import { mediaValues } from '../styles'

const { className: searchIconClassName, styles: svgStyles } = css.resolve`
	display: block;

	@media (min-width: ${mediaValues.md}) {
		display: none;
	}
`;

const Header = () => (
	<>
		{svgStyles}
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

				h1 {
					display: none;
					font-family: Lato;
					font-size: 24px;
					font-weight: bold;
					line-height: normal;
					letter-spacing: 0.2px;
					color: var(--dark-blue-green);
					margin: 0;
				}

				@media (min-width: ${mediaValues.md}) {
					.header {
						height: 69px;
					}

					h1 {
						display: block;
					}

					nav {
						padding: 0 40px;
						justify-content: flex-start;
					}
				}
			`
			}
		</style>
		<header className="header">
			<nav>
				<Pokeball width="19px" height="18px" />
				<h1>Pokedex</h1>
				<ul>
					<li><a className="active" href="#">Explorer</a></li>
					<li><a href="#">Favorites</a></li>
				</ul>
				<Search className={searchIconClassName} width="19px" height="19px" />
			</nav>
		</header>
	</>
);

export default Header;
