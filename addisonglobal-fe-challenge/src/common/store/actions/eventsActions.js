import { EVENTS } from '../types/eventsTypes';

const API = 'http://www.mocky.io/v2/59f08692310000b4130e9f71';

export const fetchEvents = () => async (dispatch) => {
	dispatch({
		type: EVENTS.REQUEST_START
	});

	try {
		const response = await fetch(API);
		const result = await response.json();

		dispatch({
			type: EVENTS.REQUEST_SUCCESS,
			payload: { result }
		});
	} catch (error) {
		dispatch({
			type: EVENTS.REQUEST_FAILURE,
			payload: { error }
		});
	}
};

export default fetchEvents;
