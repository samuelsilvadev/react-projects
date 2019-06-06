import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './../client/state/reducers/rootReducer';

const INITIAL_STATE = {};

export default function createStoreFactory() {
    const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

    return store;
};