import { v4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO } from './types';

export const addTodo = (text) => {
	return ({
		type: ADD_TODO,
		payload: {
			id: v4(),
			text,
		},
	});
};

export const toggleTodo = (id) => {
	return ({
		type: TOGGLE_TODO,
		payload: {
			id,
		},
	});
};
