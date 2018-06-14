import React, { Component } from 'react';
import MainPage from './components/main-page';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  handleSearch(e) {
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    const nameUser = e.target.value;
    if (keyCode === ENTER) {
      axios.get(`https://api.github.com/users/${nameUser}`)
        .then(({ data }) => {
          this.setState({
            userInfo: {
              userName: data.name,
              repos: data.public_repos,
              followers: data.followers,
              following: data.following,
              photo: data.avatar_url,
              login: data.login,
            }
          })
        });
    }
  }

  render() {
    return (
      <MainPage
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={this.handleSearch.bind(this)} />
    );
  }
}

export default App;
