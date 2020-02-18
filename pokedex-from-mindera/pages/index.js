import React from 'react';

import PokemonGrid from '@components/PokemonGrid';
import pokemonService from '@services/pokemon';

const Home = props => {
	const { pokemons = [] } = props;

	return pokemons.length > 0 ? <PokemonGrid pokemons={pokemons} /> : null;
};

Home.getInitialProps = () => {
	return pokemonService.getAllPokemons().then(pokemons => ({
		pokemons
	}));
};

export default Home;
