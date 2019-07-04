import { combineReducers } from 'redux';

import { libraryReducer } from './libraryReducer';

export default combineReducers({
	libraries: libraryReducer
});
