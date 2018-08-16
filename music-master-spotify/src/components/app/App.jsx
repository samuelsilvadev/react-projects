import React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './App.css';
import Profile from '../profile/Profile';
import Gallery from '../gallery/Gallery';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className="App__title">Music Master</h1>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an Artist"
                        />
                        <InputGroup.Addon>
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