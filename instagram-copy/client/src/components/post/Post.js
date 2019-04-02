import React from 'react';

import {
	Avatar,
	PostArticle,
	PostHeader,
	PostHeaderTitle,
	PostImage,
	PostImageCaption
} from './Post.style';

const Post = () => (
	<PostArticle>
		<PostHeader>
			<Avatar>
				<img
					src="https://avatars1.githubusercontent.com/u/13966565?s=460&v=4"
					alt="Samuel Profile"
				/>
			</Avatar>
			<PostHeaderTitle>Samuel Silva</PostHeaderTitle>
		</PostHeader>
		<PostImage>
			<img
				src="https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
				alt="Something..."
			/>
			<PostImageCaption>Beautiful colors :D!</PostImageCaption>
		</PostImage>
	</PostArticle>
);

export default Post;
