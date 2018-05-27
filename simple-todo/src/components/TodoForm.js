import React from 'react';
import './css/Todo.css';

const TodoForm = ({ addTodo }) => {
    let input;
    return (
        <div>
            <form className="todo-form">
                <input className="todo-form__add-input" ref={node => input = node} />
                <button className="todo-form__add-button" type="button" onClick={(e) => {
                    e.preventDefault();
                    addTodo(input.value);
                    input.value = '';
                }}>
                    Add
                </button>
            </form>
        </div>
    );
}

TodoForm.defaultProps = {
    addTodo: (value) => {
        console.log(value);
    }
}

export default TodoForm;