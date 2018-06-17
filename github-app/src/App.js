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
      starred: [],
      showLoader: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickRepos = this.handleClickRepos.bind(this);
    this.handleClickStarred = this.handleClickStarred.bind(this);
  }

  handleSearch(e) {
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    const nameUser = e.target.value;

    if (keyCode === ENTER) {
      this.setState({ showLoader: true });
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
            },
            repos: [],
            starred: []
          })
        })
        .finally(() => {
          this.setState({ showLoader: false });
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
        {...this.state}
        handleSearch={this.handleSearch}
        handleClickRepos={this.handleClickRepos}
        handleClickStarred={this.handleClickStarred} />
    );
  }
}

export default App;
