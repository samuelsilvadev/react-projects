import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
	Action,
	EMPLOYEE_FIELD_UPDATE,
	EMPLOYEE_RESET,
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEE_UPDATED
} from '../types';

export const employeeFieldUpdate = (name: string, value: string): Action => {
	return {
		type: EMPLOYEE_FIELD_UPDATE,
		payload: { name, value }
	};
};

export const employeeCreate = ({ name, phone, shift }): Action | Function => {
	const { currentUser } = firebase.auth();

	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => dispatch(employeeReset()))
			.then(() => Actions.pop());
	};
};

export const employeeUpdate = ({ name, phone, shift, uid }) => {
	const { currentUser } = firebase.auth();

	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees/${uid}`)
			.set({ name, phone, shift })
			.then(() => dispatch({ type: EMPLOYEE_UPDATED }))
			.then(() => Actions.employeeList({ type: 'reset' }));
	};
};

export const employeeReset = () => ({ type: EMPLOYEE_RESET });

export const employeesFetch = () => {
	const { currentUser } = firebase.auth();

	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};
