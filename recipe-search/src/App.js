import React, { useState } from 'react';

import { SearchForm, RecipesList } from './components';

import { recipe } from './API/recipe';

import './App.css';

function App() {
	const [recipes, setRecipes] = useState([]);

	const handleOnSubmitRecipeSearch = async (event) => {
		event.preventDefault();
		const recipeName = event.target.elements.recipeName.value;
		if (recipeName) {
			const data = await recipe.get({ searchTerm: recipeName });
			setRecipes(data.recipes);
		}
	}

	return (
		<div>
			<header className="header">
				<h1>Recipe Repository</h1>
			</header>
			<main className="main">
				<SearchForm onSubmit={handleOnSubmitRecipeSearch} />
				<RecipesList recipes={recipes} />
			</main>
		</div>
	);
}

export default App;
