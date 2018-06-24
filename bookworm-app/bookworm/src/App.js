import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage';
import DashBoardPage from './components/pages/DashBoardPage';

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/dashboard" component={DashBoardPage} />
  </div>
);

export default App;
