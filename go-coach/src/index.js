import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';

const $rootSelector = document.querySelector('#root');

ReactDOM.render(
    <App />,
    $rootSelector
);