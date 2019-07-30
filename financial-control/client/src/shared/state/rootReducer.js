import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './auth';
import { billingCycleReducer } from './billing-cycle';
import { dashboardReducer } from './dashboard';

const rootReducer = combineReducers({
	auth: authReducer,
	billingCycle: billingCycleReducer,
	dashboard: dashboardReducer,
	form: formReducer,
});

export default rootReducer;
