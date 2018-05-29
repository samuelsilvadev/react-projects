import React from 'react';

const TodoItem = ({ todo, handleDelete }) => {
    if (todo && todo.todo) {
        return (
            <li onClick={() => {
                handleDelete(todo.id)
            }
            }>{todo.todo}</li>
        );
    }
    console.error('INVALID VALUE', todo, this);
    return '';
}

export default TodoItem;