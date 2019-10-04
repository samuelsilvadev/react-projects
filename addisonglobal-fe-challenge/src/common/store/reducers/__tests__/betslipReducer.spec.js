import betslipReducer from '../betslipReducer';
import { BETSLIP } from '../../types/betslipTypes';

describe('Betslip Reducer', () => {
	it('should be a function', () => {
		expect(typeof betslipReducer).toBe('function');
	});

	it('should add a bet correctly', () => {
		const betAction = {
			type: BETSLIP.ADD,
			payload: {
				bet: {
					id: '1',
					name: 'Madasgacar'
				}
			}
		};

		const newState = betslipReducer([], betAction);

		expect(newState).toEqual([
			{
				id: '1',
				name: 'Madasgacar'
			}
		]);
	});

	it('should remove a bet correctly', () => {
		const betAction = {
			type: BETSLIP.REMOVE,
			payload: {
				bet: {
					id: '1'
				}
			}
		};

		const INITIAL_STATE = [
			{
				id: '1'
			}
		];

		const newState = betslipReducer(INITIAL_STATE, betAction);

		expect(newState).toEqual([]);
	});

	it('should ignore non related actions and just return the state', () => {
		const INITIAL_STATE = [
			{
				id: '1'
			}
		];

		const action = {
			type: 'UNKNOWN'
		};

		const newState = betslipReducer(INITIAL_STATE, action);

		expect(newState).toEqual(INITIAL_STATE);
	});
});
