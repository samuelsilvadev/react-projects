import fetch from 'isomorphic-unfetch';

const pokemonAdapter = pokemon => ({
	sources: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`,
	title: pokemon.name,
	number: `#${pokemon.id}`,
	tags: pokemon.types.map(({ type }) => ({ text: type.name, kind: 'red' }))
});

/**
 *
 * @param {object} options - options to request.
 * @param {number} [limit] - the limit of results.
 *
 * @returns {Promise<Array>} - Array of Pokemons.
 */
function getAllPokemons({ limit = 10 } = {}) {
	return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
		.then(response => response.json())
		.then(response => {
			const nextRequests = response.results.map(result =>
				fetch(result.url)
			);

			return Promise.all(nextRequests);
		})
		.then(response => {
			const promiseToJson = response.map(response => response.json());

			return Promise.all(promiseToJson);
		})
		.then(response => response.map(pokemonAdapter));
}

export default getAllPokemons;
