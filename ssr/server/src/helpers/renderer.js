import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Routes from './../client/Routes';

export default function renderer(request) {
    const context = {};
    const content = renderToString(
        <StaticRouter location={ request.path } context={context}>
            <Routes />
        </StaticRouter>
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