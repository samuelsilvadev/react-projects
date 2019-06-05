import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from '../client/components/Home';

export default function renderer() {
    const content = renderToString(<Home />);

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