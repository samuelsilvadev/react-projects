import 'babel-polyfill';

import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';

import { routes } from './client/Routes';
import { renderer, createStoreFactory } from './helpers';

const app = express();

app.use('/api', proxy(process.env.SERVER_API, {
    // This is specific for the course purpose.
    proxyReqOptDecorator(options) {
        options.headers['x-forwarded-host'] = 'localhost:3000';

        return options;
    }
}));

app.use(express.static('public'));

app.get('*', async (req, res) => {
    const store = createStoreFactory(req);
    const matchedRoutes = matchRoutes(routes, req.path) || [];
    const promises = matchedRoutes.map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    await Promise.all(promises);

    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
        res.status(404);
    }

    res.send(content);
});

app.listen(3000, () => {
    console.log('Listening on the port 3000');
});