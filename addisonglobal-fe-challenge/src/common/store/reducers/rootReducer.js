import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import betslipReducer from './betslipReducer';

export default combineReducers({
	events: eventsReducer,
	betslip: betslipReducer
});
