import { SET_VISIBILITY_FILTER, SHOW_ALL } from './../types';

const INITIAL_STATE = SHOW_ALL;

const visibilityFilters = (state = INITIAL_STATE, action = {}) => {
	if (action.type === SET_VISIBILITY_FILTER) {
		return action.payload.filter;
	}	

	return state;
};

export default visibilityFilters;
