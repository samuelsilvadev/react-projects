import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';

import Header from '@components/Header';

import './app.css';

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
					/>
				</Head>
				<Header />
				<main>
					<Component {...pageProps} />
				</main>
			</Fragment>
		);
	}
}

export default CustomApp;
