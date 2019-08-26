import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { recipe } from '@api/recipe';

import './RecipeDetails.css';

export const RecipeDetails = ({ location = {} }) => {
	const [activeRecipe, setActiveRecipe] = useState();

	useEffect(() => {
		const { state } = location;
		if (!state || !state.recipe || !state.recipe.title) {
			const recipeId = location.pathname.match(/\d+$/);
			recipe.getById({ recipeId })
				.then((response) => {
					setActiveRecipe(response.recipe);
				});
		} else {
			setActiveRecipe(state.recipe);
		}
	}, [location])

	if (!activeRecipe) {
		return null;
	}

	return (
		<section className="details">
			<div className="details__wrapper">
				<img className="details__image" src={activeRecipe.image_url} alt={recipe.title} />
				<h1 className="details__title">{activeRecipe.title}</h1>
				<h2 className="details__subtitle">Publisher: <span>{activeRecipe.publisher}</span></h2>
				<p className="details__website">Website:
					<a href={activeRecipe.publisher_url} rel="noopener noreferrer" target="_blank">
						{activeRecipe.publisher_url}
					</a>
				</p>
				<Link className="details__link" to="/">Go home</Link>
			</div>
		</section>
	);
};

export default RecipeDetails;
