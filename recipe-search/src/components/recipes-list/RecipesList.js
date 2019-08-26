import React from 'react';

import Card from '../card';

import './RecipesList.css';

const _renderRecipe = (recipe) => (
	<li key={recipe.recipe_id}>
		<Card
			imageSrc={recipe.image_url}
			title={recipe.title}
			subtitle={<>Publisher: <span>{recipe.publisher}</span></>}
			link={{
				text: 'View recipe',
				to: {
					pathname: `/recipe/${recipe.recipe_id}`,
					state: {
						recipe
					}
				}
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
