import { combineReducers } from 'redux';

import { libraryReducer } from './libraryReducer';
import { selectionLibraryReducer } from './selectionLibraryReducer';

export default combineReducers({
	libraries: libraryReducer,
	selectedLibraryId: selectionLibraryReducer,
});
