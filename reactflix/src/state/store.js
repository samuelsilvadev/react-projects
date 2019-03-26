import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root';

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
	window.__REDUX_DEVTOOLS_EXTENSION__ :
	(data) => data; 

const enhancer = compose(
	applyMiddleware(thunk),
	enableReduxDevTools()
);

export const store = createStore(rootReducer, enhancer);

export default store;
