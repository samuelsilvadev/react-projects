import * as actionsTypes from '../actionsTypes';

export default function userReducer(state = {}, action = {}) {
    if (action.type === actionsTypes.FETCH_USERS_STARTED) {
        return {
            ...state,
            isLoading: true,
        }
    }

    if (action.type === actionsTypes.FETCH_USERS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            data: action.payload.data,
        }
    }
    
    if (action.type === actionsTypes.FETCH_USERS_ERROR) {
        return {
            ...state,
            isLoading: false,
            error: action.payload,
        }
    }

    return state;
};