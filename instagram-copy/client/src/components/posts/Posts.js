import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import Post from '../post';
import { getPostsQuery } from './queries';

const _renderPost = (postData) => (
	<Post
		nickname={ postData.user.nickname }
		avatar={ postData.user.avatar }
		key={ postData.id }
		{...postData} />
);

export const Posts = () => {
	return (
		<Query query={ getPostsQuery() }>
			{
				({ loading, error, data }) => {
					if (loading) {
						return <p>Loading Posts...</p>;
					}

					if (error) {
						return <p>Error Fetching Posts...</p>;
					}

					const { posts } = data;

					return (
						<Fragment>
							{ posts.map(_renderPost) }
						</Fragment>
					);
				}
			}
		</Query>
	);
};

export default Posts;
