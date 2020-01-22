import React from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';

import SearchInput from './SearchInput';
import { Pokeball, Search } from '../icons';

import { mediaValues } from '../styles';

const { className: searchIconClassName, styles: svgStyles } = css.resolve`
	display: block;

	@media (min-width: ${mediaValues.md}) {
		display: none;
	}
`;

const {
	className: pokeballIconClassName,
	styles: svgPokeballStyles
} = css.resolve`
	@media (min-width: ${mediaValues.md}) {
		margin-right: 8px;
	}
`;

const {
	className: searchInputClassName,
	styles: searchInputStyles
} = css.resolve`
	display: none !important;

	@media (min-width: ${mediaValues.md}) {
		display: flex !important;
	}
`;

const Header = () => (
	<>
		<style jsx>
			{`
				.header {
					box-shadow: 0 0 2px 0 var(--light-sky-blue);
					border-top: 5px solid var(--seaweed-green);
					background-color: var(--white);
					height: 55px;
				}

				nav,
				ul {
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

				li.active:not(:last-child) {
					margin-right: 18px;
				}

				.link {
					font-family: Lato;
					font-size: 16px;
					line-height: normal;
					letter-spacing: 0.13px;
					color: var(--metallic-blue);
					text-decoration: none;
				}

				li.active .link {
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
						margin-right: 32px;
					}

					nav {
						padding: 0 40px;
						justify-content: flex-start;
					}
				}
			`}
		</style>
		{svgStyles}
		{svgPokeballStyles}
		{searchInputStyles}
		<header className='header'>
			<nav>
				<Pokeball
					className={pokeballIconClassName}
					width='19px'
					height='18px'
				/>
				<h1>Pokedex</h1>
				<ul>
					<li className='active'>
						<Link href='/'>
							<a className='link'>Explorer</a>
						</Link>
					</li>
					<li>
						<Link href='/favorites'>
							<a className='link'>Favorites</a>
						</Link>
					</li>
				</ul>
				<Search
					className={searchIconClassName}
					width='19px'
					height='19px'
				/>
				<SearchInput className={searchInputClassName} />
			</nav>
		</header>
	</>
);

export default Header;
