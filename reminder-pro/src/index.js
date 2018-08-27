import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import './index.css';

const $rootElement = document.querySelector('#root');

ReactDOM.render(
    <App />,
    $rootElement
);