import * as actionsTypes from '../actionsTypes';

import { actionCreatorFactory } from './actionCreatorFactory';

export function fetchAdmins() {
    return actionCreatorFactory({
        actionsTypes: {
            loading: actionsTypes.FETCH_ADMIN_STARTED,
            success: actionsTypes.FETCH_ADMIN_SUCCESS,
            error: actionsTypes.FETCH_ADMIN_ERROR,
        },
        endPoint: '/admins',
    });
}