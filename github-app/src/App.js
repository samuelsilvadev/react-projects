import React, { Component } from 'react';
import MainPage from './components/main-page';
import axios from 'axios';

const BASE_API = 'https://api.github.com'
const END_POINT_USERS = `${BASE_API}/users/{login}`;
const END_POINT_STARRED = `${BASE_API}/users/{login}/starred`;
const END_POINT_REPOS = `${BASE_API}/users/{login}/repos`;

class App extends Component {

  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    };
  }

  handleSearch(e) {
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    const nameUser = e.target.value;
    if (keyCode === ENTER) {
      axios.get(END_POINT_USERS.replace('{login}', nameUser))
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

  handleClickRepos() {
    axios.get(END_POINT_REPOS.replace('{login}', this.state.userInfo.login))
      .then(({ data }) => {
        this.setState({
          repos: data
        })
      });
  }

  handleClickStarred() {
    axios.get(END_POINT_STARRED.replace('{login}', this.state.userInfo.login))
      .then(({ data }) => {
        this.setState({
          starred: data
        })
      });
  }

  render() {
    return (
      <MainPage
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={this.handleSearch.bind(this)}
        handleClickRepos={this.handleClickRepos.bind(this)}
        handleClickStarred={this.handleClickStarred.bind(this)} />
    );
  }
}

export default App;
