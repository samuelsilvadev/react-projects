import { createStore } from 'redux';

import reminders from './reducers';

export default createStore(
    reminders,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
