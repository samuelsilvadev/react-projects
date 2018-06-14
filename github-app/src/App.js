import React, { Component } from 'react';
import MainPage from './components/main-page';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  render() {
    return (
      <MainPage
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred} />
    );
  }
}

export default App;
