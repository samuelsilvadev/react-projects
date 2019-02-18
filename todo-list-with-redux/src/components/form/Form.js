import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './../../state/actions-creators';

import './Form.css';

export const Form = ({ addTodo }) => {

	const _handleSubmit = (event) => {
		event.preventDefault();
	
		const text = event.target.todo.value;
	
		addTodo(text);
	
		event.target.reset();
	};

	return (
		<form className='todo-form' onSubmit={_handleSubmit}>
			<input
				type='text'
				name='todo'
				required
				autoComplete='off'
				autoCapitalize='off'
			/>
			<button className='btn' type='submit'>
				Save
			</button>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addTodo: (text) => dispatch(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(Form);
