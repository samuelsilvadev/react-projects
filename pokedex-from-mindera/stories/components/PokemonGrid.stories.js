import React from 'react';
import PokemonGrid from '@components/PokemonGrid';

import { WithGlobalCssVariables } from '../decorators/withGlobalCssVariables';
import { WithCenter } from '../decorators/withCenter';

const pokemons = [
	{
		title: 'Bulbasaur',
		sources: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
		tags: [
			{ text: 'grass', kind: 'red' },
			{ text: 'poison', kind: 'purple' }
		],
		number: '#001'
	},
	{
		title: 'Ivysaur',
		sources: 'https://pokeres.bastionbot.org/images/pokemon/2.png',
		tags: [
			{ text: 'grass', kind: 'red' },
			{ text: 'poison', kind: 'purple' }
		],
		number: '#002'
	},
	{
		title: 'Venusaur',
		sources: 'https://pokeres.bastionbot.org/images/pokemon/3.png',
		tags: [
			{ text: 'grass', kind: 'red' },
			{ text: 'poison', kind: 'purple' }
		],
		number: '#003'
	},
	{
		title: 'Charmander',
		sources: 'https://pokeres.bastionbot.org/images/pokemon/4.png',
		tags: [
			{ text: 'grass', kind: 'red' },
			{ text: 'poison', kind: 'purple' }
		],
		number: '#004'
	}
];

export const PokemonGridStory = () => (
	<WithGlobalCssVariables>
		<WithCenter>
			<PokemonGrid pokemons={pokemons} />
		</WithCenter>
	</WithGlobalCssVariables>
);

PokemonGridStory.story = {
	name: 'Pokemon Grid'
};
