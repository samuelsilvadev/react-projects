import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage';
import DashBoardPage from './components/pages/DashBoardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import SignUpPage from './components/pages/SignUpPage';
import ConfirmationPage from './components/pages/ConfirmationPage'

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/confirmation/:token" component={ConfirmationPage} />
    <GuestRoute location={location} path="/login" component={LoginPage} />
    <GuestRoute location={location} path="/signup" component={SignUpPage} />
    <UserRoute location={location} path="/dashboard" component={DashBoardPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired
};

export default App;
