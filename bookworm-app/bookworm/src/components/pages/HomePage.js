import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const styleSpan = {
    display: 'inline-block',
    margin: '0 6px'
};

const HomePage = ({ isAuthenticated, logout }) => (
    <div>
        <h1>Home Page</h1>
        {isAuthenticated ?
            <button onClick={() => logout()}>Logout</button> :
            <div>
                <Link to="/login">Login</Link>
                <span style={styleSpan}>or</span>
                <Link to="/signup">Sign up</Link>
            </div>}
    </div>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);