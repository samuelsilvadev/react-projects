import createReducer from './../create-reducer';
import { SET_VISIBILITY_FILTER, SHOW_ALL } from './../types';

const INITIAL_STATE = SHOW_ALL;

const visibilityFilters = createReducer(INITIAL_STATE, {
	[SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter,
});

export default visibilityFilters;
