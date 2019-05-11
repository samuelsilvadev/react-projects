import { createStore, compose } from 'redux';

import rootReducer from './rootReducer';

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
	window.__REDUX_DEVTOOLS_EXTENSION__ :
	(data) => data;

const enhancer = compose(enableReduxDevTools());

export const store = createStore(rootReducer, enhancer);

export default store;
