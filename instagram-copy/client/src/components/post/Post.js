import React from 'react';
import PropTypes from 'prop-types';

import {
	Avatar,
	PostArticle,
	PostHeader,
	PostHeaderTitle,
	PostImage,
	PostImageCaption
} from './Post.style';

const Post = ({ avatar, nickname, image, caption  }) => (
	<PostArticle>
		<PostHeader>
			<Avatar>
				<img
					src={ avatar }
					alt={ nickname }
				/>
			</Avatar>
			<PostHeaderTitle>{ nickname }</PostHeaderTitle>
		</PostHeader>
		<PostImage>
			<img
				src={ image }
				alt={ caption }
			/>
			<PostImageCaption>{ caption }</PostImageCaption>
		</PostImage>
	</PostArticle>
);

Post.propTypes = {
	avatar: PropTypes.string.isRequired,
	nickname: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
};

export default Post;
