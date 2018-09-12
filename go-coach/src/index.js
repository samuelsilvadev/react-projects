import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

import App from './components/app';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in ou signed up', user);
    } else {
        console.log('user still needs sign in or sign up');
    }
});

const $rootSelector = document.querySelector('#root');

ReactDOM.render(
    <Router path="/" history={browserHistory}>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
    </Router>,
    $rootSelector
);