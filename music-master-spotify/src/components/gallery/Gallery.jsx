import React from 'react';

import './Gallery.css';
import { PropTypes } from 'prop-types';

class Gallery extends React.Component {
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
					<div className="gallery__album" key={index}>
						<img className="gallery__album__image" src={imageAlbum.url} alt={album.name} title={album.name} />
						<span className="gallery__album__title">{album.name}</span>
					</div>
				);
			})
		);
	}
}

Gallery.propTypes = {
	tracks: PropTypes.array
};

Gallery.defaultProps = {
	tracks: []
};

export default Gallery;
