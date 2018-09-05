import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/startStore';
import App from './components/app/App';
import './index.css';

const $rootElement = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    $rootElement,
);
