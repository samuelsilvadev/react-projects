import { Action, EMAIL_CHANGED, PASSWORD_CHANGED, AUTH, LOGIN_USER_SUCCESS, LOGIN_USER_LOADING, LOGIN_USER_ERROR } from './../types';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	isLoading: false,
	error: null,
};

const authReducer = (state: AUTH = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return {
				...state,
				email: action.payload
			}
		case PASSWORD_CHANGED:
			return {
				...state,
				password: action.payload
			}
		case LOGIN_USER_LOADING:
			return {
				...state,
				isLoading: true
			}
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				...INITIAL_STATE,
				user: action.payload,
			}
		case LOGIN_USER_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			}
		default:
			return state;
	}
};

export default authReducer;
