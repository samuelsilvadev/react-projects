import { createStore } from 'redux';

import reminders from './reducers';

export default createStore(reminders);