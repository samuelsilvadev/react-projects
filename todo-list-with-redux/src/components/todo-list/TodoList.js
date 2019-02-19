import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from './../../state/actions-creators';

import './TodoList.css';

export const TodoList = ({ todos, toggleTodo }) => {

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
			<li className={ `collection-item todo-item ${classNames}` } key={ id } onClick={ _handleToggleTodo(id) }>
				{ text }
			</li>
		);
	};

	return (
		<ul className="collection">
			{ todos.map(_renderTodoItem) }
		</ul>
	);
}

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	toggleTodo: (id) =>  dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
