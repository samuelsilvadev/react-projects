import visibilityFilters from './../reducers/visibility-filters';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, SET_VISIBILITY_FILTER } from './../types';

describe('Visibility Filters', () => {
	it('`visibilityFilters` should be a function', () => {
		expect(typeof visibilityFilters).toBe('function');
	});

	it('should update the state when pass a payload of `SHOW_ACTIVE`', () => {
		const state = SHOW_ALL;
		const action = { type: SET_VISIBILITY_FILTER, payload: { filter: SHOW_ACTIVE } };
		const result = visibilityFilters(state, action);

		expect(result).toBe(SHOW_ACTIVE);
	});

	it('should update the state when pass a payload of `SHOW_COMPLETED`', () => {
		const state = SHOW_ACTIVE;
		const action = { type: SET_VISIBILITY_FILTER, payload: { filter: SHOW_COMPLETED } };
		const result = visibilityFilters(state, action);

		expect(result).toBe(SHOW_COMPLETED);
	});

	it('should return the latest state when `action.type` is unknown', () => {
		const state = SHOW_ALL;
		const action = { type: 'UNKNOWN', payload: {} };
		const result = visibilityFilters(state, action);

		expect(result).toBe(SHOW_ALL);
	});

	it('should return the initialState when pass state as `undefined`', () => {
		const state = undefined;
		const result = visibilityFilters(state);

		expect(result).toEqual(SHOW_ALL);
	});
});
