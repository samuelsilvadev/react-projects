import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { imagesSagas } from './sagas';

const getStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(sagaMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

	sagaMiddleware.run(imagesSagas);

	return store
};

export default getStore();
