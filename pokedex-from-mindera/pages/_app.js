import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import normalizeStyles from 'normalize.css?type=global';

import Header from '../components/Header';

import { mediaValues } from '../styles';

class CustomApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Fragment>
				<Head>
					<title>Pokedex</title>
					<link rel='icon' href='/favicon.ico' />
					<link
						href='https://fonts.googleapis.com/css?family=Lato&display=swap'
						rel='stylesheet'
					></link>
				</Head>
				<style jsx global>
					{`
						${normalizeStyles} :root {
							--light-sky-blue: #d9e2ec;
							--white: #fff;
							--pale-grey: #f0f4f8;
							--metallic-blue: #486581;
							--greeny-blue: #3ebd93;
							--dark-blue-green: #014d40;
							--dark-grey-blue: #334e68;
							--seaweed-green: #35b378;
						}

						body {
							background-color: var(--pale-grey);
						}

						ul {
							list-style: none;
							margin: 0;
							padding: 0;
						}

						main {
							margin: 40px auto 0;
							padding: 0 15px;
						}

						@media (min-width: ${mediaValues.md}) {
							main {
								padding: 0;
								margin-top: 60px;
								max-width: 680px;
							}
						}
					`}
				</style>
				<Header />
				<main>
					<Component {...pageProps} />
				</main>
			</Fragment>
		);
	}
}

export default CustomApp;
