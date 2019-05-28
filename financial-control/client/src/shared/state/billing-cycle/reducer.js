import { combineReducers } from 'redux';
import {
	BILLING_CYCLE_LOADING,
	BILLING_CYCLE_SUCCESS,
	BILLING_CYCLE_ERROR,
	BILLING_CYCLE_SAVE_LOADING,
	BILLING_CYCLE_SAVE_SUCCESS,
	BILLING_CYCLE_SAVE_ERROR,
	BILLING_CYCLE_EDIT_LOADING,
	BILLING_CYCLE_EDIT_SUCCESS,
	BILLING_CYCLE_EDIT_ERROR,
} from './actionsTypes';

const LIST_INITIAL_STATE = {
	isLoading: false,
	data: [],
};

const REGISTER_INITIAL_STATE = {
	isLoading: false,
};

/**
 * Creates a reducer function.
 * 
 * @param {Object} actions Set of actions types.
 * @param {String} actions.loading LOADING action type.
 * @param {String} actions.success SUCCESS action type.
 * @param {String} actions.error ERROR action type.
 * 
 * @returns {Function} reducer.
 */
function generateReducer({ loading, success, error }) {
	return function reducer(state = REGISTER_INITIAL_STATE, action = {}) {
		switch (action.type) {
			case loading:
				return {
					...state,
					isLoading: true,
				}
			case success:
				return {
					...state,
					isLoading: false,
				}
			case error:
				return {
					...state,
					isLoading: false,
					error: action.payload.error,
				}
	
			default:
				return state;
		}
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
	register: generateReducer({
		loading: BILLING_CYCLE_SAVE_LOADING,
		success: BILLING_CYCLE_SAVE_SUCCESS,
		error: BILLING_CYCLE_SAVE_ERROR
	}),
	update: generateReducer({
		loading: BILLING_CYCLE_EDIT_LOADING,
		success: BILLING_CYCLE_EDIT_SUCCESS,
		error: BILLING_CYCLE_EDIT_ERROR
	}),
});
