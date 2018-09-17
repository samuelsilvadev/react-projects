import { SIGNED_IN } from './../actionsTypes';

export function logUser(email) {
    return {
        type: SIGNED_IN,
        payload: email,
    }
}