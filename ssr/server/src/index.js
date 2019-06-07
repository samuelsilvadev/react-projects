import 'babel-polyfill';

import express from 'express';
import { matchRoutes } from 'react-router-config';

import { routes } from './client/Routes';
import { renderer, createStoreFactory } from './helpers';

const app = express();

app.use(express.static('public'));

app.get('*', async (req, res) => {
    const store = createStoreFactory();
    const matchedRoutes = matchRoutes(routes, req.path) || [];
    const promises = matchedRoutes.map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    await Promise.all(promises);

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('Listening on the port 3000');
});