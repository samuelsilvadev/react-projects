import React from 'react';
import PokemonCard from '@components/PokemonCard';

import { WithGlobalCssVariables } from '../decorators/withGlobalCssVariables';
import { WithCenter } from '../decorators/withCenter';

export const PokemonCardStory = () => (
	<WithGlobalCssVariables>
		<WithCenter>
			<PokemonCard
				title='Bulbasaur'
				sources='https://pokeres.bastionbot.org/images/pokemon/1.png'
				tags={[
					{ text: 'grass', kind: 'red' },
					{ text: 'poison', kind: 'purple' }
				]}
				number='#001'
			/>
		</WithCenter>
	</WithGlobalCssVariables>
);

PokemonCardStory.story = {
	name: 'Pokemon Card'
};
