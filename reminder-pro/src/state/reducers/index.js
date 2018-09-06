import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../actionsTypes';

const INITIAL_STATE = [];

const reminders = (state = INITIAL_STATE, action = {}) => {
    console.log('passing at reducer');
    switch (action.type) {
    case ADD_REMINDER:
        console.log(ADD_REMINDER);
        return [
            ...state,
            {
                dueDate: action.payload.dueDate,
                text: action.payload.text,
                id: Math.random(),
            },
        ];
    case DELETE_REMINDER:
        console.log(DELETE_REMINDER);
        return state
            .filter(reminder => reminder.id !== action.payload);
    case CLEAR_REMINDERS:
        return INITIAL_STATE;
    default:
        return state;
    }
};

export default reminders;
