import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function AuthButton({ isLogged }) {
    return (
        isLogged ?
            <a href="/api/logout">Logout</a> :
            <a href="/api/auth/google">Login</a>
    );
}

export function Header(props) {
    const { isLogged } = props;

    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/something">Not Found</Link>
            {
                isLogged &&
                    <Link to="/admins">Admin</Link>
            }
            <AuthButton isLogged={ isLogged } />
        </header>
    )
}

function mapStateToProps({ auth }) {
    return {
        isLogged: auth.isLogged
    }
}

export default connect(mapStateToProps)(Header);
