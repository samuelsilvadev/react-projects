import React from 'react';

const TodoItem = ({ value }) => {
    if (value) {
        return (
            <li>{value}</li>
        );
    }
    console.error('INVALID VALUE', value, this);
    return '';
}

export default TodoItem;