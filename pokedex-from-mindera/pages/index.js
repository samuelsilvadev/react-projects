import React, { useEffect } from 'react';

import PokemonGrid from '@components/PokemonGrid';
import pokemonService from '@services/pokemon';

const Home = props => {
	const { pokemons = [], state } = props;

	useEffect(() => {
		if (pokemons.length > 0) {
			state.actions.setPokemons(pokemons);
		}
	}, []);

	return pokemons.length > 0 ? <PokemonGrid pokemons={pokemons} /> : null;
};

Home.getInitialProps = () => {
	return pokemonService.getAllPokemons().then(pokemons => ({
		pokemons
	}));
};

export default Home;
