import { v4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './types';

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

export const setVisibilityFilter = (filter) => {
	return ({
		type: SET_VISIBILITY_FILTER,
		payload: {
			filter
		},
	})
};
