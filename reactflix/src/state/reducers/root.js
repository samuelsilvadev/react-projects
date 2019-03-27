import { combineReducers } from 'redux';
import videosReducer from './videos';
import uiReducer from './ui';

export default combineReducers({
	videos: videosReducer,
	ui: uiReducer,
});

