import React, { Fragment, createContext, useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';

import Header from '@components/Header';

import '@styles/app.css';

export let __GLOBAL_API_CONTEXT__ = undefined;

export const ApiContext = createContext({});

const ApiContextProvider = (props) => {
	const [pokemons, setPokemons] = useState([]);
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		__GLOBAL_API_CONTEXT__ = { data: { pokemons, favorites } };
	}, [pokemons, favorites]);

	const addFavorite = (pokemon) => {
		setFavorites((favorites) => [
			...favorites,
			Object.assign(pokemon, { isFavorite: true }),
		]);
	};

	const removeFavorite = (favoritePokemon) => {
		const filteredPokemons = favorites.filter(
			(pokemon) => pokemon.number !== favoritePokemon.number
		);

		setFavorites(filteredPokemons);
	};

	const onFavorite = (pokemon) => {
		pokemon.isFavorite ? removeFavorite(pokemon) : addFavorite(pokemon);
	};

	return (
		<ApiContext.Provider
			value={{
				data: { pokemons, favorites },
				actions: { setPokemons, onFavorite },
			}}
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
