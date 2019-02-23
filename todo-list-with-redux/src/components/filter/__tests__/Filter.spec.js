import React from 'react';
import { shallow } from 'enzyme';

import { SHOW_ALL } from './../../../state/types';

import { Filter, FILTERS } from './../Filter';

describe('<Filter />', () => {
	it('should render correctly', () => {
		const tree = shallow(<Filter />);
		const $filter = tree.find('[data-enzyme-id="filter"]');
		const $title = tree.find('[data-enzyme-id="filter-title"]');

		FILTERS.forEach((filter) => {
			const $button = tree.find(`[data-enzyme-id="filter-button-${filter.label}"]`);

			expect($button).toBeDefined();
			expect($button.text()).toBe(filter.label);
		});

		expect($filter).toBeDefined();
		expect($title.text()).toBe('Filter by:');
		expect(tree).toMatchSnapshot();
	});

	it('should call `updateFilter` when click on `button`', () => {
		const updateFilter = jest.fn();

		const tree = shallow(<Filter updateFilter={ updateFilter } />);
		const $filterButtonCompleted = tree.find('[data-enzyme-id="filter-button-Completed"]');

		$filterButtonCompleted.simulate('click');

		expect(updateFilter).toHaveBeenCalledTimes(1);
	});

	it('should not call `updateFilter` if `button` is disabled', () => {
		const updateFilter = jest.fn();

		const tree = shallow(<Filter updateFilter={ updateFilter } activeFilter={ SHOW_ALL } />);
		const $filterButtonAll = tree.find('[data-enzyme-id="filter-button-All"]');

		$filterButtonAll.simulate('click');

		expect($filterButtonAll.is('[disabled]')).toBe(true);
		expect(updateFilter).not.toHaveBeenCalledTimes(1);
	});
});
