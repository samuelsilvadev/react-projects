import gql from 'graphql-tag';

export const getPostsQuery = () =>
	gql`
		{
			posts(userId: "1") {
				id
				user {
					nickname
					avatar
				}
				image
				caption
			}
		}
	`;

export default getPostsQuery;
