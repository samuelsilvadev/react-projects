import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';

const $rootSelector = document.querySelector('#root');

ReactDOM.render(
    <Router path="/" history={ browserHistory }>
        <Route path="/app" component={ App }/>
        <Route path="/signin" component={ SignIn }/>
        <Route path="/signup" component={ SignUp }/>
    </Router>,
    $rootSelector
);