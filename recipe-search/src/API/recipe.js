const CORS_HANDLER = 'https://cors-anywhere.herokuapp.com/';
const API = 'https://www.food2fork.com/api/';

export const recipe = {
	get: async ({ searchTerm }) => {
		const response = await fetch(`${CORS_HANDLER}${API}search?key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}`)
		const data = await response.json();

		return data;
	},
	getById: async ({ recipeId }) => {
		const response = await fetch(`${CORS_HANDLER}${API}get?key=${process.env.REACT_APP_API_KEY}&rId=${recipeId}`)
		const data = await response.json();

		return data;
	}
}
