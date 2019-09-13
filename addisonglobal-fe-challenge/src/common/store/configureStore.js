import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const configureStore = (preloadedState) => {
	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(applyMiddleware(thunk))
	);

	if (module.hot) {
		module.hot.accept('./reducers/rootReducer', () => {
			const nextRootReducer = require('./reducers/rootReducer').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
