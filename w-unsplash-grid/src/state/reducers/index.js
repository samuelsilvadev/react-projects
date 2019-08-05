import { combineReducers } from 'redux';

import { imagesReducer, loadingReducer, errorReducer } from './images';

const rootReducer = combineReducers({
	images: imagesReducer,
	loading: loadingReducer,
	error: errorReducer,
});

export default rootReducer;
