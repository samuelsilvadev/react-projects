import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

import './RecipesList.css';

const _renderRecipe = (recipe) => (
	<li key={recipe.recipe_id} data-test="recipe-list__item">
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
			data-test="recipe-list__card"
		/>
	</li>
);

const RecipesList = ({ recipes = [] }) => (
	<ul className="recipe-list" data-test="recipe-list">
		{recipes.map(_renderRecipe)}
	</ul >
);

RecipesList.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.shape({
		recipe_id: PropTypes.number.isRequired,
		image_url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		publisher: PropTypes.string.isRequired
	}))
};

export default RecipesList;
