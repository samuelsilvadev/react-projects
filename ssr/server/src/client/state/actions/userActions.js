import * as actionsTypes from '../actionsTypes';

export function fetchUsers() {
    return async function(dispatch, getState, api) {
        dispatch({ type: actionsTypes.FETCH_USERS_STARTED });

        try {
            const response = await api.get('/users');
            const data = response.data;
            
            dispatch({ type: actionsTypes.FETCH_USERS_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({ type: actionsTypes.FETCH_USERS_ERROR, payload: { error } });
        }
    }
}