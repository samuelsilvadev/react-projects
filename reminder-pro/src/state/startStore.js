import { createStore } from 'redux';

import { loadState, saveState } from '../localStorage';

import reminders from './reducers';

const store = createStore(
    reminders,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
