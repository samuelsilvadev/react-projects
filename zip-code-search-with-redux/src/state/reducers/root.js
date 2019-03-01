import { combineReducers } from 'redux';

import addressReducer from './address';

export default combineReducers({
	address: addressReducer,
});
