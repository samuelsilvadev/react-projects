import { combineReducers } from 'redux';
import {
	BILLING_CYCLE_LOADING,
	BILLING_CYCLE_SAVE_LOADING,
	BILLING_CYCLE_SUCCESS,
	BILLING_CYCLE_ERROR,
	BILLING_CYCLE_SAVE_SUCCESS,
	BILLING_CYCLE_SAVE_ERROR,
} from './actionsTypes';

const LIST_INITIAL_STATE = {
	isLoading: false,
	data: [],
};

const REGISTER_INITIAL_STATE = {
	isLoading: false,
};

export function registerReducer(state = REGISTER_INITIAL_STATE, action = {}) {
	switch (action.type) {
		case BILLING_CYCLE_SAVE_LOADING:
			return {
				...state,
				isLoading: true,
			}
		case BILLING_CYCLE_SAVE_SUCCESS:
			return {
				...state,
				isLoading: false,
			}
		case BILLING_CYCLE_SAVE_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			}

		default:
			return state;
	}
}

export function listReducer(state = LIST_INITIAL_STATE, action = {}) {
	switch (action.type) {
		case BILLING_CYCLE_LOADING:
			return {
				...state,
				isLoading: true,
			}
		case BILLING_CYCLE_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload.data,
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

export default combineReducers({
	list: listReducer,
	register: registerReducer
});
