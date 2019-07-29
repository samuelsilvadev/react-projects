export interface Action {
	type: string;
	payload?: any;
}

export interface User {}

export interface AUTH {
	email: string;
	password: string;
	user: User;
	isLoading: boolean;
	error: any;
}

export interface EMPLOYEE_FORM {
	name: string;
	phone: string;
	shift: string;
	isLoading: boolean;
	error: any;
}

export interface STATE {
	auth: AUTH;
	employeeForm: EMPLOYEE_FORM;
	employees: Object;
}

export const EMAIL_CHANGED = '@FORM/EMAIL_CHANGED';
export const PASSWORD_CHANGED = '@FORM/PASSWORD_CHANGED';

export const LOGIN_USER_LOADING = '@FORM/LOGIN_USER_LOADING';
export const LOGIN_USER_ERROR = '@FORM/LOGIN_USER_ERROR';
export const LOGIN_USER_SUCCESS = '@FORM/LOGIN_USER_SUCCESS';

export const EMPLOYEE_FIELD_UPDATE = '@EMPLOYEE/EMPLOYEE_FIELD_UPDATE';
export const EMPLOYEE_RESET = '@EMPLOYEE/EMPLOYEE_RESET';
export const EMPLOYEES_FETCH_SUCCESS = '@EMPLOYEE/EMPLOYEES_FETCH_SUCCESS';
