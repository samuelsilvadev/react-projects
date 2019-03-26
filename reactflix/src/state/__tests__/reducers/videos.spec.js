import videosReducer, { INITIAL_STATE } from '../../reducers/videos';
import { ADD_VIDEO } from '../../types';

describe('Videos Reducer', () => {
	it('should be a function', () => {
		expect(typeof videosReducer).toBe('function');
	});

	it('should return a new state when `ADD_VIDEO` be passed', () => {
		const action = {
			type: ADD_VIDEO,
			payload: {
				id: 1,
				title: 'First',
			}
		};

		const result = videosReducer(INITIAL_STATE, action);
		const expectedState = {
			1: action.payload,
		};
		
		expect(result).toMatchObject(expectedState);
	});

	it('should concatenate state when more than one action was called', () => {
		const action = (id) => ({
			type: ADD_VIDEO,
			payload: {
				id,
				title: 'First',
			}
		});

		let result = INITIAL_STATE;

		result = videosReducer(INITIAL_STATE, action(1));
		result = videosReducer(result, action(2));

		const expectedState = {
			1: action(1).payload,
			2: action(2).payload,
		};
		
		expect(result).toMatchObject(expectedState);
	});

	it('should return `INITIAL_STATE` if no action be passed', () => {
		const result = videosReducer(INITIAL_STATE);
		
		expect(result).toEqual(INITIAL_STATE);
	});
});
