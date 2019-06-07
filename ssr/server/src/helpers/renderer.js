import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { Routes } from './../client/Routes';

export default function renderer(request, store) {
    const context = {};
    const content = renderToString(
        <Provider store={ store }>
            <StaticRouter location={ request.path } context={context}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head>
                <title>SSR with React</title>
            </head>
            <body>
                <div id="root">${content}</div>

                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};