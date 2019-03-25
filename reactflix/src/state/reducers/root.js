import { combineReducers } from 'redux';
import videosReducer from './videos';

export default combineReducers({
	videos: videosReducer,
});

