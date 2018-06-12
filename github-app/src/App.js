import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="search">
          <input className="search__input" type="search" placeholder="Type a username to search"/>
        </div>

        <div className="user">
          <img className="user__photo" src="https://avatars3.githubusercontent.com/u/13966565?v=4" alt="Profile Samuel Silva" />
          <div className="user__details">
            <h1 className="user__name">
              <a href="https://github.com/samuelsilvadev">
                Samuel Silva
            </a>
            </h1>

            <ul className="user__counters">
              <li>Repos: 100</li>
              <li>Followers: 10</li>
              <li>Following: 20</li>
            </ul>
          </div>
          <div className="user__actions">
            <button>See repositories</button>
            <button>See favorites</button>
          </div>
        </div>
        <div className="repositories">
          <h2>Repositories</h2>
          <ul>
            <li><a href="#">name</a></li>            
          </ul>
        </div>
        <div className="starreds">
          <h2>Favorites</h2>
          <ul>
            <li><a href="#">name</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
