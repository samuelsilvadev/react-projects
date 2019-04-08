import React, { Fragment } from 'react';
import { Query } from 'react-apollo';

import Post from '../post';

import { Message } from './Posts.style';

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
						return <Message>Loading Posts...</Message>;
					}

					if (error) {
						return <Message>Error Fetching Posts...</Message>;
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
