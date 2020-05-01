import React from 'react';

import PokemonGrid from '@components/PokemonGrid';

const Favorites = (props) => {
	const {
		state: {
			data: { favorites },
			actions: { onFavorite },
		},
	} = props;

	return favorites.length > 0 ? (
		<PokemonGrid pokemons={favorites} onFavorite={onFavorite} />
	) : null;
};

export default Favorites;
