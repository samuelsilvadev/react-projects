/* eslint-disable indent */
import { ADD_VIDEO } from '../types';

export const INITIAL_STATE = {};

function videosReducer(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case ADD_VIDEO:
			return {
				...state,
				[action.payload.id]: {
					id: action.payload.id,
					title: action.payload.title
				}
			};

		default:
			return state;
	}
}

export default videosReducer;
