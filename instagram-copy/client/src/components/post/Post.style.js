import styled from '@emotion/styled';

import { WHITE, MERCURY } from '../style';

export const Avatar = styled.div`
	height: 30px;
	width: 30px;

	& img {
		border-radius: 50%;
		height: 100%;
		width: 100%;
	}
`;

export const PostArticle = styled.article`
	border-radius: 3px;
	border: 1px solid ${MERCURY};
	background-color: ${WHITE};
	margin-bottom: 60px;
	margin-left: 20%;
	margin-right: 20%;
`;

export const PostHeader = styled.header`
	align-items: center;
	display: flex;
	padding: 16px;
`;

export const PostHeaderTitle = styled.h2`
	font-weight: bold;
	margin: 0;
	margin-left: 12px;
`;

export const PostImage = styled.figure`
	margin: 0;
	
	& img {
		width: 100%;
	}
`;

export const PostImageCaption = styled.figcaption`
	padding: 16px;
`;
