import axios from 'axios';

import { AUTH_USER_FETCHED, AUTH_USER_FETCHED_ERROR, AUTH_TOKEN_VALIDATED } from './actionsTypes'

function submit(values, endPoint) {
	return async function (dispatch) {
		try {
			const response = await axios.post(endPoint, values);

			dispatch({ type: AUTH_USER_FETCHED, payload: response.data });
		} catch (error) {
			const hasCustomMessages = error.response && error.response.data;

			dispatch({
				type: AUTH_USER_FETCHED_ERROR,
				payload: {
					error: {
						info: error,
						customMessages: hasCustomMessages ? error.response.data.errors : [],
						message: error.message,
					}
				}
			})
		}
	}
}

export function signIn(values) {
	return submit(values, `${process.env.SERVER_BASE_OPEN_URL}/sign-in`);
}

export function signUp(values) {
	return submit(values, `${process.env.SERVER_BASE_OPEN_URL}/sign-up`);
}

export function signOut() {
	return { type: AUTH_TOKEN_VALIDATED, payload: false };
}

export function validateToken(token) {
	return async function (dispatch) {
		if (token) {
			try {
				const response = await axios.post(`${process.env.SERVER_BASE_OPEN_URL}/validate-token`, { token });

				dispatch({ type: AUTH_TOKEN_VALIDATED, payload: response.data.valid });
			} catch (error) {
				dispatch({ type: AUTH_TOKEN_VALIDATED, payload: false });
			}
		} else {
			dispatch({ type: AUTH_TOKEN_VALIDATED, payload: false });
		}
	}
}
