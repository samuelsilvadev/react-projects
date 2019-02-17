import { ADD_TODO, TOGGLE_TODO } from './types';

const INITIAL_STATE = [];

const todos = (state = INITIAL_STATE, action  = {}) => {
	if (action.type === ADD_TODO) {
		return state.concat({
			id: action.payload.id,
			text: action.payload.text,
			completed: false,
		});
	}

	if (action.type === TOGGLE_TODO) {
		return state.map((todo) => {
			if (todo.id === action.payload.id) {
				return {
					...todo,
					completed: !todo.completed,
				}
			}

			return todo;
		});
	}

	return state;
};

export default todos;
