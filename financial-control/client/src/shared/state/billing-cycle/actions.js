import axios from 'axios';

import { BILLING_CYCLE_LOADING, BILLING_CYCLE_SUCCESS, BILLING_CYCLE_ERROR } from './actionsTypes';

export function getList() {
	return async function(dispatch) {
		const END_POINT = `${process.env.SERVER_BASE_URL}/billing-cycle`;
		
		dispatch({ type: BILLING_CYCLE_LOADING })
	
		try {
			const { data } = await axios.get(END_POINT);
	
			dispatch({ type: BILLING_CYCLE_SUCCESS, payload: { data } });
		} catch (error) {
			dispatch({
				type: BILLING_CYCLE_ERROR,
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
