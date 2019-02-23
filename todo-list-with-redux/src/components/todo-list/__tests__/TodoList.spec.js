import React from 'react';
import { shallow } from 'enzyme';

import { TodoList } from './../TodoList';

const todos = [{
	id: 1,
	text: 'Go to supermarket',
	completed: false,
}];

describe('<TodoList />', () => {
	it('should render correctly', () => {
		
		const tree = shallow(<TodoList todos={ todos } />);
		
		expect(tree.exists('[data-enzyme-id="todo-wrapper"]')).toBe(true);
		expect(tree.exists('[data-enzyme-id="todo-1"]')).toBe(true);
		expect(tree).toMatchSnapshot();
	});

	it('should render nothing without todos', () => {
		const tree = shallow(<TodoList />);
		
		expect(tree.exists('[data-enzyme-id="todo-wrapper"]')).toBe(false);
	});

	it('should call `toggleTodo` when click on todo item', () => {
		const toggleTodo = jest.fn();
		const tree = shallow(<TodoList todos={ todos } toggleTodo={ toggleTodo } />);
		const $todo = tree.find('[data-enzyme-id="todo-1"]');

		$todo.simulate('click');
		
		expect(toggleTodo).toHaveBeenCalledTimes(1);
		expect(toggleTodo).toHaveBeenCalledWith(1);
	});
});
