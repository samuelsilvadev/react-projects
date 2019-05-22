import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { dashboardReducer } from './dashboard';
import { billingCycleReducer } from './billing-cycle';

const rootReducer = combineReducers({
	dashboard: dashboardReducer,
	billingCycle: billingCycleReducer,
	form: formReducer,
});

export default rootReducer;
