import { combineReducers } from 'redux';

import user from './reducer-user';
import goals from './reducer-goals';
import completedGoals from './reducer-completed-goals';

const rootReducer = combineReducers({
    user,
    goals,
    completedGoals,
});

export default rootReducer;
