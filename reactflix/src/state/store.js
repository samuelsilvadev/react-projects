import { createStore } from 'redux';
import rootReducer from './reducers/root';

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
	window.__REDUX_DEVTOOLS_EXTENSION__ :
	(data) => data; 

export const store = createStore(rootReducer, enableReduxDevTools());

export default store;
