import React from 'react';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App container">
                <h1 className="App__title">
                    Reminder Pro
                </h1>
                <form>
                    <div className="row">
                        <div className="form-group col-md-10">
                            <label className="sr-only" htmlFor="i-have-to">I have to...</label>
                            <input
                                id="i-have-to"
                                type="text"
                                placeholder="I have to..."
                                className="form-control" />
                        </div>
                        <div className="form-group col-md-2">
                            <button
                                type="button"
                                className="btn btn-success btn-block">
                                Save
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default App;