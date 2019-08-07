import { combineReducers } from 'redux';

import { imagesReducer, loadingReducer, errorReducer, nextPageReducer } from './images';

const rootReducer = combineReducers({
	images: imagesReducer,
	loading: loadingReducer,
	error: errorReducer,
	nextPage: nextPageReducer,
});

export default rootReducer;
