import * as actionsTypes from './../actionsTypes';

import { actionCreatorFactory } from './actionCreatorFactory';

export function fetchCurrentUser() {
    return actionCreatorFactory({
        actionsTypes: {
            loading: actionsTypes.FETCH_CURRENT_USER_STARTED,
            success: actionsTypes.FETCH_CURRENT_USER_SUCCESS,
            error: actionsTypes.FETCH_CURRENT_USER_ERROR,
        },
        endPoint: '/current_user',
    });
} 