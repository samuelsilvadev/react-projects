import { UPDATE_ADDRESS } from './types';

export function updateAddress(payload) {
	return {
		type: UPDATE_ADDRESS,
		payload,
	};
};
