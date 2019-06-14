import * as actionsTypes from '../actionsTypes';

import { actionCreatorFactory } from './actionCreatorFactory';

export function fetchUsers() {
    return actionCreatorFactory({
        actionsTypes: {
            loading: actionsTypes.FETCH_USERS_STARTED,
            success: actionsTypes.FETCH_USERS_SUCCESS,
            error: actionsTypes.FETCH_USERS_ERROR,
        },
        endPoint: '/users',
    });
}