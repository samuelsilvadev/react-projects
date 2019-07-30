import axios from 'axios';

export const axiosAuthorizationMiddleware = (store) => (next) => (action) => {
	const state = store.getState();
	const hasToken = state.auth && state.auth.user && state.auth.user.token;

	axios.defaults.headers.common['authorization'] = hasToken ? state.auth.user.token : null;

	next(action);
}
