import { STATS } from '../../types';

const statsReducer = (state = {}, action = {}) => {
	switch (action.type) {
		case STATS.LOAD:
			return {
				...state,
				[action.payload]: {
					isLoading: true,
					downloads: null,
					error: false,
				}
			};
		case STATS.LOAD_SUCCESS:
			return {
				...state,
				[action.payload.id]: {
					isLoading: false,
					downloads: action.payload.downloads,
					error: false,
				}
			};
		case STATS.LOAD_FAIL:
			return {
				...state,
				[action.payload]: {
					isLoading: false,
					downloads: null,
					error: true,
				}
			};
		default:
			return state;
	}
}

export default statsReducer;
