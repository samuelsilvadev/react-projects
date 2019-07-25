import { Action, EMPLOYEES_FETCH_SUCCESS } from './../types';

const INITIAL_STATE = {};

const employeeReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case EMPLOYEES_FETCH_SUCCESS:
			return {
				...action.payload
			}
		default:
			return state;
	}
}

export default employeeReducer;
