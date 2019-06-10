import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import rootReducer from './../client/state/reducers/rootReducer';

const INITIAL_STATE = {};

export default function createStoreFactory(request) {
    const axiosInstance = axios.create({
        baseURL: process.env.SERVER_API,
        headers: {
            cookie: request.get('cookie') || '',
        },
    });

    const store = createStore(
        rootReducer,
        INITIAL_STATE,
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
};