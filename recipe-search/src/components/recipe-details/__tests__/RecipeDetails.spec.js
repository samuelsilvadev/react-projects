import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import RecipeDetails from '../RecipeDetails';

import { toTestId } from '@tests/utils';

jest.mock('@api/recipe', () => ({
	recipe: {
		getById: () => Promise.resolve({
			recipe: {
				title: 'Pasta',
				image_url: 'pasta.png',
				publisher: 'Joao',
				publisher_url: 'joao.com'
			}
		})
	}
}));

jest.mock('react-router-dom', () => ({
	Link: ({ to, children, ...rest }) => <a href={to} {...rest}>{children}</a>
}));

const locationMock = {
	pathname: 'recipes/123456'
};

const locationWithStateMock = {
	...locationMock,
	state: {
		recipe: {
			title: 'Pasta',
			image_url: 'pasta.png',
			publisher: 'Joao',
			publisher_url: 'joao.com'
		}
	}
}

const DATA_TESTS = [
	'details',
	'details__image',
	'details__title',
	'details__subtitle',
	'details__website',
	'details__website__link',
	'details__link'
];

describe('<RecipeDetails />', () => {
	it('should render correctly when HAS NO state in location', async () => {
		let wrapper;

		await act(async () => {
			wrapper = mount(<RecipeDetails location={locationMock} />);
		});

		wrapper.update();

		DATA_TESTS.forEach(dataTest => {
			expect(wrapper.find(toTestId(dataTest)).exists()).toBe(true);
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('should render correctly when HAS state in location', async () => {
		let wrapper;

		await act(async () => {
			wrapper = mount(<RecipeDetails location={locationWithStateMock} />);
		});

		wrapper.update();

		DATA_TESTS.forEach(dataTest => {
			expect(wrapper.find(toTestId(dataTest)).exists()).toBe(true);
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('should not render when has no location', async () => {
		let wrapper;

		await act(async () => {
			wrapper = mount(<RecipeDetails />);
		});

		wrapper.update();

		DATA_TESTS.forEach(dataTest => {
			expect(wrapper.find(toTestId(dataTest)).exists()).toBe(false);
		});

		expect(wrapper).toMatchSnapshot();
	});
});
