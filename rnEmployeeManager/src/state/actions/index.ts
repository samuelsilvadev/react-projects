import { EMAIL_CHANGED, Action, PASSWORD_CHANGED } from './../types';

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
