import styled from '@emotion/styled';

import Play from '../icons/Play';

import { BACKGROUND_COLOR, GENERAL } from '../style';

export const Video = styled.section`
	text-align: center;
`;

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 10px;

	& ${Video} {
		flex: 1 1 200px;
		margin: 1px;
	}
`;

export const VideoThumb = styled.div`
	align-items: center;
	border: 2px solid ${BACKGROUND_COLOR};
	display: flex;
	justify-content: center;
	height: 100px;
`;

export const VideoTitle = styled.h2`
	color: ${BACKGROUND_COLOR};
	margin: 2px 0;
`;

export const PlayStyled = styled(Play)`
	cursor: pointer;
	fill: ${BACKGROUND_COLOR};
	height: 50px;
	transition: transform 0.15s ease-in-out;
	width: 50px;
	z-index: ${GENERAL};

	&:hover {
		transform: scale(1.2);
	}
`;
