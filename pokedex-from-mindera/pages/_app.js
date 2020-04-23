import React, { Fragment, createContext, useState } from 'react';
import App from 'next/app';
import Head from 'next/head';

import Header from '@components/Header';

import './app.css';
import { useEffect } from 'react';

export let __GLOBAL_API_CONTEXT__ = undefined;

export const ApiContext = createContext({});

const ApiContextProvider = (props) => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		__GLOBAL_API_CONTEXT__ = { data: { pokemons } };
	}, [pokemons]);

	return (
		<ApiContext.Provider
			value={{ data: { pokemons }, actions: { setPokemons } }}
			{...props}
		/>
	);
};

class CustomApp extends App {
	render() {
		const { Component, pageProps, data } = this.props;

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
								<Component
									{...pageProps}
									data={data}
									state={state}
								/>
							)}
						</ApiContext.Consumer>
					</ApiContextProvider>
				</main>
			</Fragment>
		);
	}
}

export default CustomApp;
