import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SearchInput from './SearchInput';
import { Pokeball, Search } from '../icons';

import styles from './Header.module.css';

const navigation = [
	{
		route: '/',
		name: 'Home'
	},
	{
		route: '/favorites',
		name: 'Favorites'
	}
];

const Header = () => {
	const router = useRouter();

	return (
		<>
			<header className={styles.header}>
				<nav>
					<Pokeball
						className={styles.pokeballIcon}
						width='19px'
						height='18px'
					/>
					<h1>Pokedex</h1>
					<ul>
						{navigation.map(({ name, route }) => {
							return (
								<li
									key={name}
									className={
										route === router.route
											? styles.active
											: ''
									}
								>
									<Link href={route}>
										<a className={styles.link}>{name}</a>
									</Link>
								</li>
							);
						})}
					</ul>
					<Search
						className={styles.searchIcon}
						width='19px'
						height='19px'
					/>
					<SearchInput className={styles.searchInput} />
				</nav>
			</header>
		</>
	);
};

export default Header;
