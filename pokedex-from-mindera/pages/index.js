import React from 'react';
import Head from 'next/head';
import normalizeStyles from 'normalize.css?type=global';

import Header from '../components/Header';

const Home = () => (
	<div>
		<Head>
			<title>Pokedex</title>
			<link rel="icon" href="/favicon.ico" />
			<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"></link>
		</Head>
		<style jsx global>
			{
				`
				${normalizeStyles}
					:root {
						--light-sky-blue: #d9e2ec;
						--white: #fff;
						--pale-grey: #f0f4f8;
						--metallic-blue: #486581;
						--greeny-blue: #3ebd93;
					}

					body {
						background-color: var(--pale-grey);
					}

					ul {
						list-style: none;
						margin: 0;
						padding: 0;
					}
				`
			}

		</style>
		<Header />
	</div>
);

export default Home;
