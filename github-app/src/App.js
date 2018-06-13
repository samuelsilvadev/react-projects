import React, { Component } from 'react';
import Actions from './components/actions';
import Repos from './components/repos'
import Search from './components/search'
import UserInfo from './components/user-info'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className="repositories"
          title="Repositories"
          repos={[{ link: '#', title: 'Teste' }]} />
        <Repos
          className="starreds"
          title="Favorites"
          repos={[{ link: '#', title: 'Starred 1' }]} />
      </div>
    );
  }
}

export default App;
