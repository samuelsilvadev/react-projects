import React from 'react';

import Card from './Card';

import './RecipesList.css';

const _renderRecipe = (recipe) => (
	<li key={recipe.recipe_id}>
		<Card
			imageSrc={recipe.image_url}
			title={recipe.title}
			subtitle={<>Publisher: <span>{recipe.publisher}</span></>}
			action={{
				text: 'View recipe',
				onClick: () => { }
			}}
		/>
	</li>
);

const RecipesList = ({ recipes = [] }) => (
	<ul className="recipe-list">
		{recipes.map(_renderRecipe)}
	</ul >
);

export default RecipesList;
