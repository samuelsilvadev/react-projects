import * as actionsTypes from '../actionsTypes';

export default function adminsReducer(state = {}, action = {}) {
    if (action.type === actionsTypes.FETCH_ADMIN_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            data: action.payload.data,
        }
    }

    return state;
};