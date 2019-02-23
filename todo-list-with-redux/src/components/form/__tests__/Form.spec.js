import React from 'react';
import { shallow } from 'enzyme';

import { Form } from './../Form';

describe('<Form />', () => {
	it('should render correctly', () => {
		const tree = shallow(<Form />);
		const $form = tree.find('[data-enzyme-id="todo-form"]');
		const $button = tree.find('[data-enzyme-id="todo-form"]');

		expect($form).toBeDefined();
		expect($button).toBeDefined();
		expect(tree).toMatchSnapshot();
	});

	it('should call `addTodo` when submit the form', () => {
		const addTodo = jest.fn();
		const tree = shallow(<Form addTodo={ addTodo } />);
		const $form = tree.find('[data-enzyme-id="todo-form"]');
		const mockEvent = {
			preventDefault: jest.fn(),
			target: {
				todo: 'Add something...',
				reset: jest.fn(),
			},
		};

		$form.simulate('submit', mockEvent);

		expect(addTodo).toHaveBeenCalledTimes(1);
	});
});
