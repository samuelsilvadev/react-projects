import React, { Fragment, createContext, useState } from 'react';
import App from 'next/app';
import Head from 'next/head';

import Header from '@components/Header';

import './app.css';

export const ApiContext = createContext({});

const ApiContextProvider = (props) => {
	const [pokemons, setPokemons] = useState([]);

	return (
		<ApiContext.Provider
			value={{ data: { pokemons }, actions: { setPokemons } }}
			{...props}
		/>
	);
};

ApiContextProvider.getInitialProps = (context) => {
	console.log(
		'ApiContextProvider.getInitialProps -> ApiContextProvider',
		context
	);

	return {};
};

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
					<ApiContextProvider>
						<ApiContext.Consumer>
							{(state) => (
								<Component {...pageProps} state={state} />
							)}
						</ApiContext.Consumer>
					</ApiContextProvider>
				</main>
			</Fragment>
		);
	}
}

export default CustomApp;
