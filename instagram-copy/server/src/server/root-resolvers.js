const USERS_LIST = {
	1: {
		id: 1,
		nickname: 'Samuel Silva',
		avatar: 'https://avatars1.githubusercontent.com/u/13966565?s=460&v=4'
	}
};

const POST_LIST = {
	1: {
		1: {
			id: 1,
			user: USERS_LIST[1],
			caption: 'Somewhere at the rainbow',
			image: 'https://images.unsplash.com/photo-1553532070-9f677c9df3dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
		},
	}
};

const root = {
	user: function({ id }) {
		return USERS_LIST[id];
	},
	post: function({ userId, postId }) {
		return POST_LIST[userId][postId];
	},
	posts: function({ userId }) {
		return Object.values(POST_LIST[userId]);
	}
};

module.exports = root;
