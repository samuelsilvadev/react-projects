import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="search">
          <input type="search" />
        </div>

        <div className="user">
          <img className="user__photo" src="https://avatars3.githubusercontent.com/u/13966565?v=4" alt="Profile Samuel Silva" />
          <h1 className="user__name">
            <a href="https://github.com/samuelsilvadev">
              Samuel Silva
            </a>
          </h1>

          <ul>
            <li>Repos: 100</li>
            <li>Followers: 10</li>
            <li>Following: 20</li>
          </ul>

          <div className="user__actions">
            <button>See repositories</button>
            <button>See favorites</button>
          </div>
        </div>
        <div className="repositories">
          <h2>Repositories</h2>
          <ul>
            <li>name</li>
          </ul>
        </div>
        <div className="repositories">
          <h2>Favorites</h2>
          <ul>
            <li>name</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
