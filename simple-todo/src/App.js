import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
    this.id = 0;
  }

  handleAddTodo(value) {

    const todo = { todo: value, id: this.id++ };
    this.state.data.unshift(todo);

    this.setState({
      data: this.state.data
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TodoList Today</h1>
        </header>
        <div className="App-body">
          <TodoForm addTodo={this.handleAddTodo.bind(this)} />
          <TodoList todos={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
