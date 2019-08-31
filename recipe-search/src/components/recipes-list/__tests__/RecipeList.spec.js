import React from 'react';
import { shallow } from 'enzyme';

import RecipesList from '../RecipesList';

import { toTestId } from '@tests/utils';

const recipeMock = {
	recipe_id: 123456,
	image_url: 'hey.png',
	title: 'Pasta',
	publisher: 'Yo miesmo'
};

const recipesMock = [recipeMock];

describe('<RecipeList />', () => {
	it('should render correctly when has recipes', () => {
		const wrapper = shallow(<RecipesList recipes={recipesMock} />);

		['recipe-list', 'recipe-list__item', 'recipe-list__card']
			.forEach(dataTest =>
				expect(wrapper.find(toTestId(dataTest)).exists()).toBe(true)
			);

		expect(wrapper).toMatchSnapshot();
	});

	it('should render correctly when has no recipes', () => {
		const wrapper = shallow(<RecipesList />);

		expect(wrapper.find(toTestId('recipe-list')).exists()).toBe(true);

		['recipe-list__item', 'recipe-list__card']
			.forEach(dataTest =>
				expect(wrapper.find(toTestId(dataTest)).exists()).toBe(false)
			);

		expect(wrapper).toMatchSnapshot();
	});
});
