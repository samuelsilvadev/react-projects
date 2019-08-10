import { combineReducers } from 'redux';

import { imagesReducer, loadingReducer, errorReducer, nextPageReducer } from './images';
import statsReducer from './stats/statsReducer';

const rootReducer = combineReducers({
	images: imagesReducer,
	loading: loadingReducer,
	error: errorReducer,
	nextPage: nextPageReducer,
	stats: statsReducer
});

export default rootReducer;
