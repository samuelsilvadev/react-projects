import { ADD_REMINDER, DELETE_REMINDER } from '../actionsTypes';

const reminders = (state = [], action = {}) => {
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
    default:
        return state;
    }
};

export default reminders;
