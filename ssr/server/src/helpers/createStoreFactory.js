import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const INITIAL_STATE = {};

export default function createStoreFactory() {
    const store = createStore(() => {}, INITIAL_STATE, applyMiddleware(thunk));

    return store;
};