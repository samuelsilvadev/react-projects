import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../actionsTypes';

const _createAction = (type, payload) => {
    return { type, payload };
};

export const addReminder = (data) => {
    console.log('passing at action creator');
    return _createAction(ADD_REMINDER, data);
};

export const deleteReminder = (id) => {
    return _createAction(DELETE_REMINDER, id);
};

export const clearAllReminders = () => {
    return _createAction(CLEAR_REMINDERS);
};
