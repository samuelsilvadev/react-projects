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
        };
        this._changeValueField = this._changeValueField.bind(this);
        this._search = this._search.bind(this);
        this._handleEnterKeyPessed = this._handleEnterKeyPessed.bind(this);
    }

    _changeValueField(e) {
        this.setState({ query: e.target.value });
    }

    _search() {
        console.log(this.state);
    }

    _handleEnterKeyPessed(e) {
        if (e.key === 'Enter') {
            this._search();
        }
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
                <Profile />
                <Gallery />
            </div>
        );
    }
}

export default App;