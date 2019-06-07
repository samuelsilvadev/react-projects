import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './state/reducers/rootReducer';

import { Routes } from './Routes';

const INITIAL_STATE = {};

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);