import { EVENTS } from '../../types/eventsTypes';
import eventsReducer from '../eventsReducer';

describe('Events Reducer', () => {
	it('should be a function', () => {
		expect(typeof eventsReducer).toBe('function');
	});

	it('should return the initial state if action is not in the reducer', () => {
		const action = {
			type: 'NONE'
		};

		const oldState = { events: [], isLoading: false };

		const newState = eventsReducer(oldState, action);

		expect(newState).toEqual(oldState);
	});

	it('should return the correct state when loading', () => {
		const action = {
			type: EVENTS.REQUEST_START
		};

		const newState = eventsReducer({}, action);

		expect(newState).toEqual({ isLoading: true });
	});

	it('should return the correct state when fail', () => {
		const error = new Error('just kidding');
		const action = {
			type: EVENTS.REQUEST_FAILURE,
			payload: { error }
		};

		const newState = eventsReducer({}, action);

		expect(newState).toEqual({ isLoading: false, error });
	});

	it('should return the correct state when all goes right', () => {
		const result = [];
		const action = {
			type: EVENTS.REQUEST_SUCCESS,
			payload: { result }
		};

		const newState = eventsReducer({}, action);

		expect(newState).toEqual({ isLoading: false, result });
	});
});
