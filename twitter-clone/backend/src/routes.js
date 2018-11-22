const express = require('express');
const TweetController = require('./controllers/TweetController');

const routes = express.Router();

routes.get('/tweets', TweetController.findAll);
routes.post('/tweets', TweetController.store);

module.exports = routes;
