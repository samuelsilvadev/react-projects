import createReducer from './../create-reducer';
import { ADD_TODO, TOGGLE_TODO } from './../types';

const INITIAL_STATE = [];

const todos = createReducer(INITIAL_STATE, {
	[ADD_TODO]: (state, action) => {
		return state.concat({
			id: action.payload.id,
			text: action.payload.text,
			completed: false,
		});
	},
	[TOGGLE_TODO]: (state, action) => {
		return state.map((todo) => {
			if (todo.id === action.payload.id) {
				return {
					...todo,
					completed: !todo.completed,
				}
			}

			return todo;
		});
	},
});

export default todos;
