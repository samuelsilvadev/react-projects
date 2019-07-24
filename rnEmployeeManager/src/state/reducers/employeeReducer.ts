import { Action, EMPLOYEE_FIELD_UPDATE, EMPLOYEE_RESET } from './../types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: '',
};

const employeeReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case EMPLOYEE_FIELD_UPDATE:
			const { name, value } = action.payload;

			return {
				...state,
				[name]: value
			};
		case EMPLOYEE_RESET:
			return INITIAL_STATE
		default:
			return state;
	}
}

export default employeeReducer;
