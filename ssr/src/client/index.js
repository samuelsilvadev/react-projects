import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './state/reducers/rootReducer';

import { Routes } from './Routes';

const axiosInstance = axios.create({
    baseURL: '/api',
});

const INITIAL_STATE = window.__PRELOAD_STATE__ || {};

const store = createStore(
    rootReducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

ReactDOM.hydrate(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);