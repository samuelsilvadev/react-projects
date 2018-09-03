import { ADD_REMINDER, DELETE_REMINDER } from './../actionsTypes';

const reminders = (state = [], action = {}) => {
    console.log('passing at reducer');
    switch (action.type) {
        case ADD_REMINDER:
        console.log(ADD_REMINDER);
        return [
            ...state,
            {
                text: action.payload,
                id: Math.random(),
            }
        ];
        case DELETE_REMINDER:
        console.log(DELETE_REMINDER);
        const { payload: id } = action;
        return state
            .filter(reminder => reminder.id !== id);
        default:
            return state;
    }
};

export default reminders;