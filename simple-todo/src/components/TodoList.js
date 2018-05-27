import React from 'react';
import './css/Todo.css';
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {

    const nodeTodos = todos.map((todo) => {
        return <TodoItem key={todo.id} value={todo.todo} />
    });
    return (<ol className="todo-list" >{nodeTodos}</ol>);
}

export default TodoList;