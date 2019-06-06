import axios from 'axios';

import * as actionsTypes from '../actionsTypes';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

export function fetchUsers(dispatch) {
    return async function() {
        dispatch({ type: actionsTypes.FETCH_USERS_STARTED });

        try {
            const response = await axios.get(END_POINT);
            
            dispatch({ type: actionsTypes.FETCH_USERS_SUCCESS, payload: { response } });
        } catch (error) {
            dispatch({ type: actionsTypes.FETCH_USERS_ERROR, payload: { error } });
        }
    }
}