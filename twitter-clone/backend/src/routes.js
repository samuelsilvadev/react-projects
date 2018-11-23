const express = require('express');
const TweetController = require('./controllers/TweetController');
const LIkeController = require('./controllers/LikeController');

const routes = express.Router();

routes.get('/tweets', TweetController.findAll);
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LIkeController.store);

module.exports = routes;
