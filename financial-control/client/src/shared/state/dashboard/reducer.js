import { BILLING_SUMMARY_SUCCESS, BILLING_SUMMARY_LOADING, BILLING_SUMMARY_ERROR } from './actionsTypes';

const INITIAL_STATE = {
	summary: {
		isLoading: false,
		error: undefined,
		data: {}
	}
};

function reducer(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case BILLING_SUMMARY_LOADING:
			return {
				summary: {
					isLoading: true,
					error: undefined,
				},
			}
		case BILLING_SUMMARY_SUCCESS:
			return {
				summary: {
					data: {
						...action.payload.data,
					},
					isLoading: false,
					error: undefined,
				},
			}
		case BILLING_SUMMARY_ERROR:
			return {
				summary: {
					isLoading: false,
					error: action.payload.error,
				},
			}
		default:
			return state;
	}
}

export default reducer;
