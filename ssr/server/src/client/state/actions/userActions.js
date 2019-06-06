import axios from 'axios';

import * as actionsTypes from '../actionsTypes';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

export function fetchUsers() {
    return async function(dispatch) {
        dispatch({ type: actionsTypes.FETCH_USERS_STARTED });

        try {
            const response = await axios.get(END_POINT);
            const data = response.data;
            
            dispatch({ type: actionsTypes.FETCH_USERS_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({ type: actionsTypes.FETCH_USERS_ERROR, payload: { error } });
        }
    }
}