import address, { INITIAL_STATE } from './../address';
import { UPDATE_ADDRESS } from './../../types';

describe('Address Reducer', () => {
	it('`address reducer`should be a function', () => {
		expect(typeof address).toBe('function');
	});

	it('should action `UPDATE_ADDRESS` update state', () => {
		const payload = {
			address: 'Somewhere',
			city: 'Somewhere',
			code: '1',
			district: 'Somewhere',
			state: 'Somewhere',
			status: 1,
		};

		const action = Object.freeze({
			type: UPDATE_ADDRESS,
			payload,
		});

		const result = address(INITIAL_STATE, action);

		expect(result).toMatchObject(payload);
	});

	it('should return initial state if pass undefined to address reducer', () => {
		const result = address(undefined);

		expect(result).toMatchObject(INITIAL_STATE);
	});
});
