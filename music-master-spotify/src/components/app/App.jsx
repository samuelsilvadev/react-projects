import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className="App__title">Music Master from App</h1>
                <form>
                    <input type="search" name="search-name-singer"/>
                </form>
                <section className="Profile">
                </section>
                <section className="Gallery"></section>
            </div>
        );
    }
}

export default App;