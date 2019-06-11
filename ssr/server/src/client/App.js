import React from 'react';
import { renderRoutes } from 'react-router-config';

import { fetchCurrentUser } from './state/actions/authActions';

import Header from './components/Header';

export function App({ route }) {
    return (
        <main>
            <Header />
            { renderRoutes(route.routes) }
        </main>
    );
}

App.loadData = function loadData(store) {
    return store.dispatch(fetchCurrentUser());
};

export default App;