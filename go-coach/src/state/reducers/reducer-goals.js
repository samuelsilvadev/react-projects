import { SET_GOALS } from './../actionsTypes';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case SET_GOALS:
            const { payload: goals } = action;

            return goals;
        default:
            return state;
    }
}