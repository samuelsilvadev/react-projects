import { UPDATE_ADDRESS } from './../types';

export const INITIAL_STATE = {
	address: '',
	city: '',
	code: '',
	district: '',
	state: '',
	status: 0,
};

function address(state = INITIAL_STATE, action = {}) {
	switch(action.type) {
		case UPDATE_ADDRESS: 
			return action.payload;
		default:
			return state;
	};
};

export default address;
