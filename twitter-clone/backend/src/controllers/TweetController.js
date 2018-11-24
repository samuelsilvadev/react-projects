const Tweet = require('./../models/Tweet');

const controller = {
	findAll: async function findAll(req, res) {
		const tweets = await Tweet.find({}).sort('-createdAt');

		return res.json(tweets);
	},
	store: async function store(req, res) {
		const tweet = await Tweet.create(req.body);

		req.io.emit('tweet', tweet);

		return res.json(tweet);
	},
};

module.exports = controller;
