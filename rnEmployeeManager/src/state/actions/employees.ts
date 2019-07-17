import { Action, EMPLOYEE_FIELD_UPDATE } from './../types';

export const employeeFieldUpdate = (name: string, value: string): Action => {
	return {
		type: EMPLOYEE_FIELD_UPDATE,
		payload: { name, value }
	}
}
