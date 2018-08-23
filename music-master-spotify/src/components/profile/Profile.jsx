import React from 'react';
import PropTypes from 'prop-types';

import './Profile.css';

import texts from './../../translate';

class Profile extends React.Component {
	
	_renderGenres(genres) {
		return genres.map((genre, index) => <li key={index}>{` ${genre} ${genres[index + 1] ? '& ' : ''} `}</li>);
	}

	render() {
		const { artist } = this.props;

		const [ lgImage, mdImage, sImage, xsImage ] = artist.images;
		return (
			<section className="profile">
				<img className="profile__image" src={lgImage.url} alt={artist.name} />
				<div className="profile__details">
					<h2 className="profiles__name">{artist.name}</h2>
					<h3 className="profiles__followers">{artist.followers.total} { texts.followers }</h3>
					<ul className="profile__genres">{this._renderGenres(artist.genres)}</ul>
				</div>
			</section>
		);
	}
}

Profile.propTypes = {
	artist: PropTypes.shape({
		external_urls: PropTypes.shape({
			spotify: PropTypes.string
		}),
		followers: PropTypes.shape({
			href: PropTypes.string,
			total: PropTypes.number
		}),
		genres: PropTypes.array,
		href: PropTypes.string,
		id: PropTypes.string,
		images: PropTypes.array,
		name: PropTypes.string,
		popularity: PropTypes.number,
		type: PropTypes.string,
		url: PropTypes.string
	})
};

Profile.defaultProps = {
	artist: {
		external_urls: '',
		followers: {
			href: '',
			total: 0
		},
		genres: [],
		href: '',
		id: '',
		images: [],
		name: '',
		popularity: 0,
		type: '',
		url: ''
	}
};

export default Profile;
