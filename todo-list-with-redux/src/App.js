import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from './state/actions-creators';

import Form from './components/form';

class App extends Component {
	render() {
		const { todos } = this.props;

		return (
			<main className="container">
				<h1>Todo Today</h1>
				<Form />
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

	_handleToggleTodo = (id) => () => {
		const { toggleTodo } = this.props;

		toggleTodo(id);
	}
}

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	toggleTodo: (id) =>  dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
