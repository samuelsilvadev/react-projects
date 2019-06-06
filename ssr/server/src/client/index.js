import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const INITIAL_STATE = {};

const store = createStore(() => {}, INITIAL_STATE, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);