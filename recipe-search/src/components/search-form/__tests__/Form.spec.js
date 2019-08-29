import React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form';

import { toTestId } from '@tests/utils';

describe('<Form />', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Form />);

		['search-form', 'search-form__input', 'search-form__button'].forEach(dataTest => {
			expect(wrapper.find(toTestId(dataTest)).exists()).toBe(true);
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('should call the `onSubmit` when submit the form', () => {
		const onSubmit = jest.fn();
		const wrapper = shallow(<Form onSubmit={onSubmit} />);

		const form = wrapper.find(toTestId('search-form'));

		form.simulate('submit');

		expect(onSubmit).toHaveBeenCalledTimes(1);
	});
});
