import { SIGNED_IN } from './../actionsTypes';

const INITIAL_STATE = {
    email: null,
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case SIGNED_IN:
            const { payload: email } = action;

            return {
                ...state,
                email,
            };
        default:
            return INITIAL_STATE;
    }
}