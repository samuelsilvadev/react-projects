import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { recipe } from '@api/recipe';

import './RecipeDetails.css';

export const RecipeDetails = ({ location = {} }) => {
	const [activeRecipe, setActiveRecipe] = useState();

	useEffect(() => {
		const { state } = location;
		if (!state || !state.recipe || !state.recipe.title) {
			if (location.pathname) {
				const recipeId = location.pathname.match(/\d+$/)[0];
				recipe.getById({ recipeId })
					.then((response) => {
						setActiveRecipe(response.recipe);
					});
			}
		} else {
			setActiveRecipe(state.recipe);
		}
	}, [location])

	if (!activeRecipe) {
		return null;
	}

	return (
		<section className="details" data-test="details">
			<div className="details__wrapper">
				<img className="details__image" src={activeRecipe.image_url} alt={recipe.title} data-test="details__image" />
				<h1 className="details__title" data-test="details__title">{activeRecipe.title}</h1>
				<h2 className="details__subtitle" data-test="details__subtitle">Publisher: <span>{activeRecipe.publisher}</span></h2>
				<p className="details__website" data-test="details__website">Website:
					<a href={activeRecipe.publisher_url} rel="noopener noreferrer" target="_blank" data-test="details__website__link">
						{activeRecipe.publisher_url}
					</a>
				</p>
				<Link className="details__link" to="/" data-test="details__link">Go home</Link>
			</div>
		</section>
	);
};

RecipeDetails.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
		state: PropTypes.object,
	})
};

export default RecipeDetails;
