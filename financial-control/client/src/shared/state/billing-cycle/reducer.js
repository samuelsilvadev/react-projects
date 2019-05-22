import {
	BILLING_CYCLE_LOADING,
	BILLING_CYCLE_SAVE_LOADING,
	BILLING_CYCLE_SUCCESS,
	BILLING_CYCLE_ERROR,
	BILLING_CYCLE_SAVE_SUCCESS,
	BILLING_CYCLE_SAVE_ERROR,
} from './actionsTypes';

const INITIAL_STATE = {
	register: {},
	list: [],
};

export function reducer(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case BILLING_CYCLE_SAVE_LOADING:
			return {
				...state,
				register: {
					isLoading: true,
				}
			}
		case BILLING_CYCLE_SAVE_SUCCESS:
			return {
				...state,
				register: {
					isLoading: false,
				}
			}
		case BILLING_CYCLE_SAVE_ERROR:
			return {
				...state,
				register: {
					isLoading: false,
					error: action.payload.error,
				}
			}
		case BILLING_CYCLE_LOADING:
			return {
				...state,
				isLoading: true,
			}
		case BILLING_CYCLE_SUCCESS:
			return {
				...state,
				isLoading: false,
				list: action.payload.data,
			}
		case BILLING_CYCLE_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			}
	
		default:
			return state;
	}
}

export default reducer;
