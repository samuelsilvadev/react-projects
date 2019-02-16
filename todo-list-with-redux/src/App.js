import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from './state/actions-creators';

class App extends Component {
	render() {
		const { todos } = this.props;

		return (
			<main>
				<form onSubmit={ this._handleSubmit }>
					<input
						type="text"
						name="todo"
						autoComplete="off"
						autoCapitalize="off" />
					<button type="submit">Save</button>
				</form>
				<ul>
					{ todos.map(this._renderTodoItem, this) }
				</ul>
			</main>
		);
	}

	_renderTodoItem(todo) {
		const { id, text } = todo;

		return (
			<li key={ id }>
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
}

const mapStateToProps = (state) => ({
	todos: state,
});

const mapDispatchToProps = (dispatch) => ({
	addTodo: (text) =>  dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
