import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from './state/actions-creators';

class App extends Component {
	render() {
		const { todos } = this.props;

		return (
			<main className="container">
				<h1>Todo Today</h1>
				<form className="todo-form" onSubmit={ this._handleSubmit }>
					<input
						type="text"
						name="todo"
						required
						autoComplete="off"
						autoCapitalize="off" />
					<button className="btn" type="submit">Save</button>
				</form>
				{	todos.length > 0 &&
					<ul className="collection">
						{ todos.map(this._renderTodoItem, this) }
					</ul>
				}
			</main>
		);
	}

	_renderTodoItem(todo) {
		const { id, text, completed: isCompleted } = todo;

		const classNames = isCompleted ? 'completed-todo' : '';

		return (
			<li className={ `collection-item todo-item ${classNames}` } key={ id } onClick={ this._handleToggleTodo(id) }>
				{ text }
			</li>
		);
	}

	_handleSubmit = (event) => {
		event.preventDefault();

		const { addTodo } = this.props;
		const text = event.target.todo.value;

		addTodo(text);

		event.target.reset();
	}

	_handleToggleTodo = (id) => () => {
		const { toggleTodo } = this.props;

		toggleTodo(id);
	}
}

const mapStateToProps = (state) => ({
	todos: state,
});

const mapDispatchToProps = (dispatch) => ({
	addTodo: (text) =>  dispatch(addTodo(text)),
	toggleTodo: (id) =>  dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
