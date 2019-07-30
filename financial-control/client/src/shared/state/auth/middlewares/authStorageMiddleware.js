import { AUTH_USER_FETCHED, AUTH_USER_FETCHED_ERROR, USER_KEY_LOCAL_STORAGE, AUTH_TOKEN_VALIDATED } from '../actionsTypes';

export const authStorageMiddleware = (store) => (next) => (action) => {
	if (action.type === AUTH_USER_FETCHED && action.payload) {
		window.localStorage.setItem(USER_KEY_LOCAL_STORAGE, JSON.stringify(action.payload))
	} else if (action.type === AUTH_USER_FETCHED_ERROR || (action.type === AUTH_TOKEN_VALIDATED && !action.payload)) {
		window.localStorage.removeItem(USER_KEY_LOCAL_STORAGE);
	}

	next(action)
}
