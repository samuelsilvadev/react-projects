import React, { useEffect } from 'react';

import PokemonGrid from '@components/PokemonGrid';
import pokemonService from '@services/pokemon';

import { __GLOBAL_API_CONTEXT__ } from './_app';

const Home = (props) => {
	const {
		pokemons = [],
		state: {
			data,
			actions: { setPokemons, onFavorite },
		},
	} = props;

	useEffect(() => {
		if (pokemons.length > 0 && data.pokemons.length === 0) {
			setPokemons(pokemons);
		}
	}, []);

	return pokemons.length > 0 ? (
		<PokemonGrid pokemons={pokemons} onFavorite={onFavorite} />
	) : null;
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
