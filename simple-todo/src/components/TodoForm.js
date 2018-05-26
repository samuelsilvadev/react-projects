import React from 'react';

const TodoForm = ({ addTodo }) => {
    let input;
    return (
        <div>
            <form>
                <input ref={node => input = node} />
                <button type="button" onClick={() => {
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