import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { firebaseApp } from './firebase';
import store from './state/startStore'
import { logUser } from './state/actions';

import App from './components/app';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in ou signed up', user);
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/');
    } else {
        console.log('user still needs sign in or sign up');
        browserHistory.replace('/signin');
    }
});

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ App } />
            <Route path="/signin" component={ SignIn } />
            <Route path="/signup" component={ SignUp } />
        </Router>
    </Provider>,
    document.querySelector('#root')
);