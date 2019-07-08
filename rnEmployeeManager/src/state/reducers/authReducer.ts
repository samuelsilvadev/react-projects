import { Action, EMAIL_CHANGED, PASSWORD_CHANGED, AUTH } from './../types';

const INITIAL_STATE = {
	email: '',
	password: '',
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
		default:
			return state;
	}
};

export default authReducer;
