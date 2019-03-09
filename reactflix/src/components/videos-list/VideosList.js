import React, { useState } from 'react';

import Modal from '../modal/Modal';

import { Container, Video, VideoThumb, VideoTitle, PlayStyled } from './VideosList.style';

const VideosList = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	
	const _handleToggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	return  (
		<Container>
			{ isModalOpen && <Modal onClose={ _handleToggleModal } /> }
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
