import React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './App.css';
import Profile from './../profile/Profile';
import Gallery from './../gallery/Gallery';

import texts from './../../translate';
import spotifyService from './../services/spotifyService';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			artist: null,
			tracks: null
		};
		this._changeValueField = this._changeValueField.bind(this);
		this._search = this._search.bind(this);
		this._handleEnterKeyPressed = this._handleEnterKeyPressed.bind(this);
		this._convertJsonToArtistOnState = this._convertJsonToArtistOnState.bind(this);
		this._convertJsonToTracksOnState = this._convertJsonToTracksOnState.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			(!prevState.artist) ||
			(prevState.artist && (prevState.artist.name !== this.state.artist.name))) {
			this._getTopTracks();
		}
	}

	render() {
		return (
			<main role="main" className="App">
				<h1 className="App__title">{texts['music-master']}</h1>
				<FormGroup role="search" className="App__search-form">
					<InputGroup>
						<FormControl
							role="textbox"
							type="text"
							placeholder={texts['search-artist']}
							aria-label={texts['search-artist']}
							query={this.state.query}
							onChange={this._changeValueField}
							onKeyPress={this._handleEnterKeyPressed}
							aria-required="true"
							required
						/>
						<InputGroup.Addon role="button" onClick={this._search}>
							<Glyphicon glyph="search" />
						</InputGroup.Addon>
					</InputGroup>
				</FormGroup>
				{this.state.artist && <Profile artist={this.state.artist} />}
				{this.state.tracks && <Gallery tracks={this.state.tracks} />}
			</main>
		);
	}

	_changeValueField(e) {
		this.setState({ query: e.target.value });
	}

	_search() {
		if (this.state.query) {
			spotifyService.getArtist(undefined, this.state.query).then(this._convertJsonToArtistOnState);
		}
	}

	_getTopTracks() {
		if (this.state.artist) {
			spotifyService.getTopTracks(undefined, this.state.artist.id).then(this._convertJsonToTracksOnState);
		}
	}

	_handleEnterKeyPressed(e) {
		if (e.key === 'Enter') {
			this._search();
		}
	}

	_convertJsonToArtistOnState(bigJSON) {
		if (bigJSON.artists) {
			const [ artists ] = bigJSON.artists.items;
			this.setState({
				artist: artists
			});
		}
	}

	_convertJsonToTracksOnState(bigJSON) {
		if (bigJSON.tracks) {
			const { tracks } = bigJSON;
			this.setState({
				tracks
			});
		}
	}
}

export default App;
