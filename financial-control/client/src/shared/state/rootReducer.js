import { combineReducers } from 'redux';

import { dashboardReducer } from './dashboard';
import { billingCycleReducer } from './billing-cycle';

const rootReducer = combineReducers({
	dashboard: dashboardReducer,
	billingCycle: billingCycleReducer,
});

export default rootReducer;
