import express from 'express';

import { renderer, createStoreFactory } from './helpers';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStoreFactory();

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('Listening on the port 3000');
});