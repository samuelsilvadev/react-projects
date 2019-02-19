import React, { Component } from 'react';

import Form from './components/form';
import TodoList from './components/todo-list';

class App extends Component {
	render() {
		return (
			<main className="container">
				<h1>Todo Today</h1>
				<Form />
				<TodoList />
			</main>
		);
	}
}

export default App;
