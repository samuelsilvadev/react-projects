import React from 'react';
import Clock from './components/clock/Clock';

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'February 25, 2018',
            newDeadline: '',
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App__header">
                    <h1>Countdown for</h1>
                    <div className="App__event">
                        <p>{this.state.deadline}</p>
                    </div>
                </header>
                <Clock deadline={this.state.deadline}/>
                <section className="Add-Event">
                    <form className="Add-Event__form">
                        <input type="text" onChange={this._handleOnChangeDeadline.bind(this)} />
                        <button onClick={this._setNewDeadLine.bind(this)}>Send</button>
                    </form>
                </section>
            </div>
        );
    }

    _handleOnChangeDeadline(e) {
        const valueTyped = e.target.value;
        valueTyped && this.setState({
            newDeadline: valueTyped,
        });
    }

    _setNewDeadLine(e) {
        e.preventDefault();
        this.setState({
            deadline: this.state.newDeadline
        });
    }
}

export default App;