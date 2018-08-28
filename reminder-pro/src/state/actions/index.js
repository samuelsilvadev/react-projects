 import { ADD_REMINDER } from './../actionsTypes';

 export const addReminder = (data) => {
     console.log('passing at action creator');
     return {
         type: ADD_REMINDER,
         payload: data,
     }
 }