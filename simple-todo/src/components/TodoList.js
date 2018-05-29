import React from 'react';
import './css/Todo.css';
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleDelete }) => {

    const nodeTodos = todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
    });
    return (<ol className="todo-list" >{nodeTodos}</ol>);
}

export default TodoList;