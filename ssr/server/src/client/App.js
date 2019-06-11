import React from 'react';
import { renderRoutes } from 'react-router-config';

export function App({ route }) {
    return (
        <main>
            <header>
                <h1>I'm a header</h1>
            </header>
            { renderRoutes(route.routes) }
        </main>
    );
}

export default App;