import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reminders from './state/reducers';

import './index.css';

const store = createStore(reminders);
const $rootElement = document.querySelector('#root');

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    $rootElement
);