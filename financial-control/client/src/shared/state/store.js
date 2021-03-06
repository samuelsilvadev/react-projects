import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { middlewares as authMiddlewares } from './auth';

const middlewares = [
	thunk,
	authMiddlewares.axiosAuthorizationMiddleware,
	authMiddlewares.authStorageMiddleware,
];

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
	window.__REDUX_DEVTOOLS_EXTENSION__ :
	(data) => data;

const enhancer = compose(
	applyMiddleware(...middlewares),
	enableReduxDevTools()
);

export const store = createStore(rootReducer, enhancer);

export default store;
