import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from './../../state/actions-creators';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from './../../state/types';

import './TodoList.css';

const getFilteredTodos = (todos, activeFilter) => {
	return {
		[SHOW_ALL]: todos,
		[SHOW_ACTIVE]: todos.filter((todo) => !todo.completed),
		[SHOW_COMPLETED]: todos.filter((todo) => todo.completed),
	}[activeFilter] || [];
};

export const TodoList = ({ todos, toggleTodo, activeFilter }) => {

	if (todos.length === 0) {
		return null;
	}

	const _handleToggleTodo = (id) => () => {
		toggleTodo(id);
	};

	const _renderTodoItem = (todo) => {
		const { id, text, completed: isCompleted } = todo;

		const classNames = isCompleted ? 'completed-todo' : '';

		return (
			<li
				data-enzyme-id={ `todo-${id}` }
				className={ `collection-item todo-item ${classNames}` } key={ id } onClick={ _handleToggleTodo(id) }>
				{ text }
			</li>
		);
	};

	return (
		<ul
			data-enzyme-id="todo-wrapper"
			className="collection">
			{ getFilteredTodos(todos, activeFilter).map(_renderTodoItem) }
		</ul>
	);
}

TodoList.defaultProps = {
	todos: [],
	activeFilter: SHOW_ALL,
};

const mapStateToProps = (state) => ({
	todos: state.todos,
	activeFilter: state.visibilityFilters,
});

const mapDispatchToProps = (dispatch) => ({
	toggleTodo: (id) =>  dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
