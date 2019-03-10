import React, { useState } from 'react';

import { Container, Video, VideoThumb, VideoTitle, PlayStyled, ModalStyled } from './VideosList.style';

const VideosList = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const modalTitle = 'Video';
	
	const _handleToggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	return  (
		<Container>
			{
				isModalOpen &&
				<ModalStyled onClose={ _handleToggleModal } title={ modalTitle }>
					<iframe
						title="Youtube Video"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/mM40-gC0xOI?controls=0"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen />
				</ModalStyled>
			}
			{Array.from({ length: 10 }).map((_, index) => {
				return (
					<Video onClick={ _handleToggleModal } key={index}>
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
};

export default VideosList;
