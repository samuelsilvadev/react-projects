import { EVENTS } from '../types/eventsTypes';

const eventsReducer = (state = {}, action) => {
	switch (action.type) {
		case EVENTS.REQUEST_START:
			return {
				isLoading: true
			};
		case EVENTS.REQUEST_SUCCESS:
			return {
				isLoading: false,
				result: action.payload.result
			};

		case EVENTS.REQUEST_FAILURE:
			return {
				isLoading: false,
				error: action.payload.error
			};
		default:
			return state;
	}
};

export default eventsReducer;
