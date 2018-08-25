import React from 'react';

import './Gallery.css';
import { PropTypes } from 'prop-types';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			audio: null,
			isPlayingAudio: false,
			previewUrl: ''
		};
	}

	componentWillUnmount() {
		if (this.state.audio) {
			this.state.audio.pause();
		}
	}

	render() {
		const { tracks } = this.props;

		return (
			<section className="gallery">
				<h3>Gallery</h3>
				{this._renderAlbums(tracks)}
			</section>
		);
	}

	_renderAlbums(tracks) {
		return (
			tracks &&
			tracks.map((track, index) => {
				const { album } = track;
				const [ imageAlbum ] = album.images;
				return (
					<div className="gallery__album" key={index} onClick={this._playAudio.bind(this, track.preview_url)}>
						<img
							className="gallery__album__image"
							src={imageAlbum.url}
							alt={album.name}
							title={album.name}
						/>
						<span className="gallery__album__title">{album.name}</span>
					</div>
				);
			})
		);
	}

	_playAudio(url) {
		const audio = new Audio(url);
		if (!this.state.isPlayingAudio) {
			audio.play();
			this.setState({
				isPlayingAudio: true,
				previewUrl: url,
				audio
			});
		} else {
			this.state.audio.pause();
			if (this.state.previewUrl === url) {
				this.setState({
					isPlayingAudio: false,
					previewUrl: '',
					audio: null
				});
			} else {
				audio.play();
				this.setState({
					isPlayingAudio: true,
					previewUrl: url,
					audio
				});
			}
		}
	}
}

Gallery.propTypes = {
	tracks: PropTypes.array
};

Gallery.defaultProps = {
	tracks: []
};

export default Gallery;
