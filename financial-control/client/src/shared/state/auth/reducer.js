import { AUTH_TOKEN_VALIDATED, AUTH_USER_FETCHED, AUTH_USER_FETCHED_ERROR, USER_KEY_LOCAL_STORAGE } from './actionsTypes';

const INITIAL_STATE = {
	user: JSON.parse(window.localStorage.getItem(USER_KEY_LOCAL_STORAGE)),
	validToken: false,
};

function reducer(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case AUTH_TOKEN_VALIDATED: {
			if (action.payload) {
				return { ...state, validToken: true };
			}

			return { ...state, validToken: false, user: null };
		}
		case AUTH_USER_FETCHED: {
			return { ...state, user: action.payload, validToken: true };
		}
		case AUTH_USER_FETCHED_ERROR: {
			return { ...state, error: action.payload.error, validToken: false, user: null };
		}
		default:
			return state;
	}
}

export default reducer;

