import React from 'react';

const RecipesContext = React.createContext();

export const RecipesContextProvider = (props) => {
	const [recipes, setRecipes] = React.useState([]);

	const context = {
		recipes,
		setRecipes
	};

	return (
		<RecipesContext.Provider value={context} {...props} />
	)
};

export const useRecipesContext = () => {
	const context = React.useContext(RecipesContext);

	return context;
};
