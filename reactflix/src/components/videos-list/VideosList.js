import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Video, VideoThumb, VideoTitle, PlayStyled, ModalStyled } from './VideosList.style';

const VideosList = ({ videos }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const modalTitle = 'Video';
	
	const _handleToggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	const _renderVideoItem = (id) => {
		return (
			<Video onClick={ _handleToggleModal } key={id}>
				<VideoThumb>
					<PlayStyled />
				</VideoThumb>
				<VideoTitle>
					{ videos[id].title }
				</VideoTitle>
			</Video>
		);
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
			{
				Object.keys(videos).map(_renderVideoItem)
			}
		</Container>
	);
};

VideosList.propTypes = {
	videos: PropTypes.shape({	
		id: PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
		}),
	}),
};

VideosList.defaultProps = {
	videos: {},
};

const mapStateToProps = ({ videos }) => ({
	videos,
});

export default connect(mapStateToProps)(VideosList);
