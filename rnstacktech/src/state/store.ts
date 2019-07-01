import { createStore } from 'redux';

import rootReducer from './reducers';

export const store: Object = createStore(rootReducer);

export default store;