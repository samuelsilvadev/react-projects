import React, { useEffect } from 'react';

import PokemonGrid from '@components/PokemonGrid';
import pokemonService from '@services/pokemon';

import { __GLOBAL_API_CONTEXT__ } from './_app';

const Home = (props) => {
	const { pokemons = [], state } = props;

	// this should not happen every new render
	// we need to find a way to set on state only when it's really
	// different
	useEffect(() => {
		if (pokemons.length > 0) {
			state.actions.setPokemons(pokemons);
		}
	}, []);

	return pokemons.length > 0 ? <PokemonGrid pokemons={pokemons} /> : null;
};

Home.getInitialProps = () => {
	if (!__GLOBAL_API_CONTEXT__ || !__GLOBAL_API_CONTEXT__.data.pokemons) {
		return pokemonService.getAllPokemons().then((pokemons) => ({
			pokemons,
		}));
	}

	return {
		pokemons: __GLOBAL_API_CONTEXT__.data.pokemons,
	};
};

export default Home;
