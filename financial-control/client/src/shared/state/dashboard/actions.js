import axios from 'axios';

import { BILLING_SUMMARY_LOADING, BILLING_SUMMARY_SUCCESS, BILLING_SUMMARY_ERROR } from './actionsTypes';

export function loadSummary() {
	return async function (dispatch) {
		const END_POINT = `${process.env.SERVER_BASE_URL}/billing-cycle/summary`;

		dispatch({ type: BILLING_SUMMARY_LOADING })

		try {
			const { data } = await axios.get(END_POINT);

			dispatch({ type: BILLING_SUMMARY_SUCCESS, payload: { data } });
		} catch (error) {
			dispatch({
				type: BILLING_SUMMARY_ERROR,
				payload: {
					error: {
						error,
						message: error.message
					}
				}
			});
		}
	}
}
