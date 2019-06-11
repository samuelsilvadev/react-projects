import * as actionsTypes from '../actionsTypes';

const INITIAL_STATE = {
    isLoading: false,
    isLogged: false,
    error: undefined,
};

export default function authReducer(state = INITIAL_STATE, action = {}) {
    if (action.type === actionsTypes.FETCH_CURRENT_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            isLogged: action.payload.data || false,
        }
    }

    return state;
};