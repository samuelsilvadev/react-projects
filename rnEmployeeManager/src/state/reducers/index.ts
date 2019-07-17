import { combineReducers } from 'redux';

import authReducer from './authReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
	auth: authReducer,
	employeeForm: employeeReducer
});
