import { UPDATE_ADDRESS, LOADING_ADDRESS, ERROR_LOADING_ADDRESS } from './../types';

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
		case LOADING_ADDRESS: 
			return {
				...state,
				isLoading: true,
			};
		case ERROR_LOADING_ADDRESS:
		case UPDATE_ADDRESS: 
			return {
				...action.payload,
				isLoading: false,
			};
		default:
			return state;
	};
};

export default address;
