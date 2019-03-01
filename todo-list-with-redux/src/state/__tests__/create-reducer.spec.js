import createReducer from './../create-reducer';

describe('Create Reducer', () => {
	it('should be a function', () => {
		expect(typeof createReducer).toBe('function');
	});

	it('should return a reducer function when execute `createReducer`', () => {
		const initialState = [];
		const actions = {};
		const result = createReducer(initialState, actions);

		expect(typeof result).toBe('function');
	});

	it('should create a reducer and execute it correctly', () => {
		const initialState = 0;
		const actions = {
			'INCREMENT': (state, action) => state + 1,
		};
		const reducer = createReducer(initialState, actions);

		const action = { type: 'INCREMENT' };
		const result = reducer(initialState, action);

		expect(result).toBe(1);
	});

	it('should execute reducer correctly even when initial state not to be passed', () => {
		const initialState = 5;
		const actions = {
			'DECREMENT': (state, action) => state - 1,
		};
		const reducer = createReducer(initialState, actions);

		const action = { type: 'DECREMENT' };
		const result = reducer(undefined, action);

		expect(result).toBe(4);
	});

	it('should return initial state when action is not known', () => {
		const initialState = 5;
		const actions = {
			'SOMETHING': () => {},
		};
		const reducer = createReducer(initialState, actions);

		const action = { type: 'ANOTHER' };
		const result = reducer(initialState, action);

		expect(result).toBe(initialState);
	});

	it('should not break if `actionsMap` is undefined', () => {
		const initialState = 5;
		const actions = undefined;
		const reducer = createReducer(initialState, actions);

		const action = { type: 'ANOTHER' };
		const result = reducer(initialState, action);

		expect(result).toBe(initialState);
	});
});
