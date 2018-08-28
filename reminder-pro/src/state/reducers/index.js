import { ADD_REMINDER } from './../actionsTypes';

const reminders = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_REMINDER:
        console.log('passing at reducer', ADD_REMINDER);
        return [
            ...state,
            {
                text: action.payload,
                id: Math.random(),
            }
        ]
        default:
            return state
        
    }
};

export default reminders;