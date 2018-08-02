import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App__header">
                    <h1>Countdown for</h1>
                    <div className="App__event">
                        ...
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
                        <input type="text"/>
                        <button>Send</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default App;