import { combineReducers } from 'redux';

import authReducer from './authReducer';
import employeeReducer from './employeeReducer';
import employeesReducer from './employeesReducer';

export default combineReducers({
	auth: authReducer,
	employeeForm: employeeReducer,
	employees: employeesReducer,
});
