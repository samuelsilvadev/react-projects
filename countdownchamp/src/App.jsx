import React from 'react';
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
                <section className="Clock">
                    <div className="Clock__days">14 days</div>
                    <div className="Clock__hours">8 hours</div>
                    <div className="Clock__minutes">50 minutes</div>
                    <div className="Clock__seconds">5 seconds</div>
                </section>
                <section className="Add-Event">
                    <form className="Add-Event__form">
                        <input type="text" onChange={this._handleOnChangeDeadline.bind(this)}/>
                        <button onClick={this._setNewDeadLine.bind(this)}>Send</button>
                    </form>
                </section>
            </div>
        );
    }

    _handleOnChangeDeadline(e) {
        const valueTyped = e.target.value;
        this.setState({
            newDeadline: valueTyped,
        })
    }

    _setNewDeadLine(e) {
        e.preventDefault();
        this.setState({
            deadline: this.state.newDeadline
        });
    }
}

export default App;