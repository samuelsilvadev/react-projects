import React from 'react';
import PropTypes from 'prop-types';

import PokemonCard from './PokemonCard';

import styles from './PokemonGrid.modules.css';

export const PokemonGrid = ({ pokemons = [] }) => {
	return (
		<section className={styles.grid}>
			{pokemons.map(pokemon => (
				<PokemonCard key={pokemon.number} {...pokemon} />
			))}
		</section>
	);
};

PokemonGrid.propTypes = {
	pokemons: PropTypes.array
};

export default PokemonGrid;
