import React, { Component } from 'react';

import { Form, Filter, TodoList  } from './components';

class App extends Component {
	render() {
		return (
			<main className="container">
				<h1>Todo Today</h1>
				<Form />
				<TodoList />
				<Filter />
			</main>
		);
	}
}

export default App;
