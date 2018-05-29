import React from 'react';

const TodoItem = ({ todo, handleDelete }) => {
    if (todo && todo.todo) {
        return (
            <li title='Click to remove' className='todo-list__item' onClick={() => {
                handleDelete(todo.id)
            }
            }>{todo.todo}</li>
        );
    }
    console.error('INVALID VALUE', todo, this);
    return '';
}

export default TodoItem;