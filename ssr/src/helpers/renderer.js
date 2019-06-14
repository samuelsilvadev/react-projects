import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

import { Routes } from './../client/Routes';

export default function renderer(request, store, context) {
    const content = renderToString(
        <Provider store={ store }>
            <StaticRouter location={ request.path } context={ context }>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();
    
    return `
        <html>
            <head>
                ${ helmet.title.toString() }
                ${ helmet.meta.toString() }
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__PRELOAD_STATE__ = ${serialize(store.getState())};
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};