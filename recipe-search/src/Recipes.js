import React from 'react';
import { SearchForm, RecipesList } from './components';

import { useRecipesContext } from '@context/recipes';

import { recipe } from './API/recipe';

export function Recipes() {
	const { recipes, setRecipes } = useRecipesContext();

	const handleOnSubmitRecipeSearch = async (event) => {
		event.preventDefault();
		const recipeName = event.target.elements.recipeName.value;
		if (recipeName) {
			const data = await recipe.get({ searchTerm: recipeName });
			setRecipes(data.recipes);
		}
	}

	return (
		<>
			<SearchForm onSubmit={handleOnSubmitRecipeSearch} />
			<RecipesList recipes={recipes} />
		</>
	)
}
