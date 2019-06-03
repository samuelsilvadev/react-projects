const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const app = express();

const Home = require('./client/components/Home').default;

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    res.send(content);
});

app.listen(3000, () => {
    console.log('Listening on the port 3000');
});