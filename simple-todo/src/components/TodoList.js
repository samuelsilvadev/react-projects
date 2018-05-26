import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {

    const nodeTodos = todos.map((todo) => {
        return <TodoItem key={todo.id} value={todo.todo} />
    });
    return (<ul className="list__todos" >{nodeTodos}</ul>);
}

export default TodoList;