import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function Header(props) {
    const { isLogged } = props;

    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            { !isLogged && <Link to="/users">Login</Link> }
            { isLogged && <Link to="/users">Logout</Link> }
        </header>
    )
}

function mapStateToProps({ auth }) {
    return {
        isLogged: auth.isLogged
    }
}

export default connect(mapStateToProps)(Header);
