const Tweet = require('./../models/Tweet');

const controller = {
	store: async function store(req, res) {
		const tweet = await Tweet.findById(req.params.id);

		tweet.set({ likes: tweet.likes + 1 });

		await tweet.save();

		return res.json(tweet);
	},
};

module.exports = controller;
