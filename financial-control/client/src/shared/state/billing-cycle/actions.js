import axios from 'axios';

import * as actionTypes from './actionsTypes';

const END_POINT = `${process.env.SERVER_BASE_URL}/billing-cycle`;

function getError(actionType, error) {
	return {
		type: actionType,
		payload: {
			error: {
				error,
				message: error.message
			}
		}
	}
}

export function create(values = {}) {
	return async function (dispatch) {

		dispatch({ type: actionTypes.BILLING_CYCLE_SAVE_LOADING })

		try {
			const { data } = await axios.post(END_POINT, values);

			dispatch({ type: actionTypes.BILLING_CYCLE_SAVE_SUCCESS, payload: { data } });
		} catch (error) {
			dispatch(getError(actionTypes.BILLING_CYCLE_SAVE_ERROR, error));
		}
	}
}

export function update(values = {}) {
	return async function (dispatch) {

		dispatch({ type: actionTypes.BILLING_CYCLE_EDIT_LOADING })

		try {
			const { data } = await axios.put(`${END_POINT}/${values._id}`, values);

			dispatch({ type: actionTypes.BILLING_CYCLE_EDIT_SUCCESS, payload: { data } });
		} catch (error) {
			dispatch(getError(actionTypes.BILLING_CYCLE_EDIT_ERROR, error));
		}
	}
}

export function remove(values = {}) {
	return async function (dispatch) {

		dispatch({ type: actionTypes.BILLING_CYCLE_REMOVE_LOADING })

		try {
			await axios.delete(`${END_POINT}/${values._id}`);

			dispatch({ type: actionTypes.BILLING_CYCLE_REMOVE_SUCCESS });
		} catch (error) {
			dispatch(getError(actionTypes.BILLING_CYCLE_REMOVE_ERROR, error));
		}
	}
}

export function getList() {
	return async function (dispatch) {

		dispatch({ type: actionTypes.BILLING_CYCLE_LOADING })

		try {
			const { data } = await axios.get(END_POINT);

			dispatch({ type: actionTypes.BILLING_CYCLE_SUCCESS, payload: { data } });
		} catch (error) {
			dispatch(getError(actionTypes.BILLING_CYCLE_ERROR, error));
		}
	}
}
