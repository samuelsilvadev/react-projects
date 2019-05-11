import { combineReducers } from 'redux';

import { dashboardReducer } from './dashboard';

const rootReducer = combineReducers({
	dashboard: dashboardReducer,
});

export default rootReducer;
