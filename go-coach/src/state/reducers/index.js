import { combineReducers } from 'redux';

import user from './reducer-user';
import goals from './reducer-goals';

const rootReducer = combineReducers({
    user,
    goals,
});

export default rootReducer;
