const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        id : String!
        nickname : String!
        avatar : String!
    }
	type Post {
		id: String!
		user: User!
		caption : String!
		image : String!
	}
	type Query{
		user(id: String) : User!
		post(userId: String, postId: String) : Post!
		posts(userId: String) : [Post]
	}
`);

module.exports = schema;
