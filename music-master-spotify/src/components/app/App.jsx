import React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './App.css';
import Profile from './../profile/Profile';
import Gallery from './../gallery/Gallery';

import texts from './../../translate';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			artist: null
		};
		this._changeValueField = this._changeValueField.bind(this);
		this._search = this._search.bind(this);
		this._handleEnterKeyPressed = this._handleEnterKeyPressed.bind(this);
		this._convertJsonToCorretObjectOnState = this._convertJsonToCorretObjectOnState.bind(this);
	}

	render() {
		return (
			<main role="main" className="App">
				<h1 className="App__title">{ texts["music-master"] }</h1>
				<FormGroup role="search" className="App__search-form">
					<InputGroup>
						<FormControl
							role="textbox"
							type="text"
							placeholder={ texts["search-artist"] }
							aria-label={ texts["search-artist"] }
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
				<Gallery />
			</main>
		);
	}

	_changeValueField(e) {
		this.setState({ query: e.target.value });
	}

	_search() {
		if (this.state.query) {
			const BASE_URL = 'https://api.spotify.com/v1/search?';
			const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
			window
				.fetch(FETCH_URL, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: process.env.REACT_APP_SPOTIFY_TOKEN
					}
				})
				.then(resp => resp.json())
				.then(this._convertJsonToCorretObjectOnState)
				.catch(this._handleErrorResponseSearch);
		}
	}

	_handleEnterKeyPressed(e) {
		if (e.key === 'Enter') {
			this._search();
		}
	}

	_convertJsonToCorretObjectOnState(bigJSON) {
		if (bigJSON.artists) {
			const [ artists ] = bigJSON.artists.items;
			this.setState({
				artist: artists
			});
		}
	}

	_handleErrorResponseSearch(error) {
		console.error(error);
	}
}

export default App;
