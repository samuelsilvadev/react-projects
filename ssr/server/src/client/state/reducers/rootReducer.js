import { combineReducers } from 'redux';

import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    admins: adminsReducer,
});

export default rootReducer;