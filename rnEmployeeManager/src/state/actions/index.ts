import firebase from 'firebase';

import { EMAIL_CHANGED, Action, PASSWORD_CHANGED, LOGIN_USER_LOADING, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from './../types';

export const emailChanged = (text: string): Action => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
}

export const passwordChanged = (text: string): Action => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
}

export const login = ({ email, password }): Action | Function => {
	return (dispatch) => {

		dispatch({ type: LOGIN_USER_LOADING });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((data) => {
				dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });
			})
			.catch((err) => {
				dispatch({ type: LOGIN_USER_ERROR, payload: err });
			})
	}
}
