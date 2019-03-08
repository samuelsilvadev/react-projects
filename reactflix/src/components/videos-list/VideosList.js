import React from 'react';

import { Container, Video, VideoThumb, VideoTitle, PlayStyled } from './VideosList.style';

const VideosList = () => (
	<Container>
		{Array.from({ length: 10 }).map((_, index) => {
			return (
				<Video key={index}>
					<VideoThumb>
						<PlayStyled />
					</VideoThumb>
					<VideoTitle>
						Video { index }
					</VideoTitle>
				</Video>
			);
		})}
	</Container>
);

export default VideosList;
