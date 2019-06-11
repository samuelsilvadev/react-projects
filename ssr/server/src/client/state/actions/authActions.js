import * as actionsTypes from './../actionsTypes';

export function fetchCurrentUser() {
    return async function (dispatch, getState, api) {
        dispatch({ type: actionsTypes.FETCH_CURRENT_USER_STARTED });

        try {
            const response = await api.get('/current_user');
            const data = response.data;

            dispatch({ type: actionsTypes.FETCH_CURRENT_USER_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({ type: actionsTypes.FETCH_CURRENT_USER_ERROR, payload: { error } });
        }
    }
} 