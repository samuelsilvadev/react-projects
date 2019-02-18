import todos from './../reducers/todos';
import { ADD_TODO, TOGGLE_TODO } from '../types';

describe('Todos', () => {
	it('`todos` should be a function', () => {
		expect(typeof todos).toBe('function');
	});

	it('`todos` should return a new array updated after ADD_TODO', () => {
		const state = [];
		const action = { type: ADD_TODO, payload: { id: 1, text: 'go to supermarket' } };
		const result = todos(state, action);
		
		expect(result).toEqual([{ id: 1, text: 'go to supermarket', completed: false }]);
	});

	it('`todos` should update a todo after TOGGLE_TODO', () => {
		const state = [{ id: 1, text: 'take my passport', completed: false }];
		const action = { type: TOGGLE_TODO, payload: { id: 1 } };
		const result = todos(state, action);
		
		expect(result).toEqual([{ id: 1, text: 'take my passport', completed: true }]);
	});

	it('should return the latest state when `action.type` is unknown', () => {
		const state = [];
		const action = { type: 'UNKNOWN', payload: { id: 1 } };
		const result = todos(state, action);

		expect(result).toEqual([]);
	});

	it('should return the initialState when pass state as `undefined`', () => {
		const state = undefined;
		const result = todos(state);

		expect(result).toEqual([]);
	});
});
