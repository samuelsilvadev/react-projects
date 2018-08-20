import React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './App.css';
import Profile from '../profile/Profile';
import Gallery from '../gallery/Gallery';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null,
        };
        this._changeValueField = this._changeValueField.bind(this);
        this._search = this._search.bind(this);
        this._handleEnterKeyPessed = this._handleEnterKeyPessed.bind(this);
        this._convertJsonToCorretObjectOnState = this._convertJsonToCorretObjectOnState.bind(this);
    }

    _changeValueField(e) {
        this.setState({ query: e.target.value });
    }

    _search() {
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        window.fetch(FETCH_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.REACT_APP_SPOTIFY_TOKEN,
            }
        })
        .then(this._handleResponseSearch)
        .then(this._convertJsonToCorretObjectOnState)
        .catch(this._handleErrorResponseSearch);
    }

    _handleEnterKeyPessed(e) {
        if (e.key === 'Enter') {
            this._search();
        }
    }

    _convertJsonToCorretObjectOnState(bigJSON) {
        const [artist] = bigJSON.artists.items;
        this.setState({
            artist
        });
    }

    _handleResponseSearch(resp) {
        return resp.json();
    }

    _handleErrorResponseSearch(error) {
        console.error(error);
    }

    render() {
        return (
            <div className="App">
                <h1 className="App__title">Music Master</h1>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an Artist"
                            query={this.state.query}
                            onChange={this._changeValueField}
                            onKeyPress={this._handleEnterKeyPessed}
                        />
                        <InputGroup.Addon onClick={this._search}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Profile artist={this.state.artist} />
                <Gallery />
            </div>
        );
    }
}

export default App;