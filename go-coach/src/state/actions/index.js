import { SIGNED_IN, SET_GOALS, SET_COMPLETED_GOALS } from './../actionsTypes';

export function logUser(email) {
    return {
        type: SIGNED_IN,
        payload: email,
    }
}

export function setGoals(goals) {
    return {
        type: SET_GOALS,
        payload: goals,
    }
}

export function setCompletedGoals(goals) {
    return {
        type: SET_COMPLETED_GOALS,
        payload: goals,
    }
}
