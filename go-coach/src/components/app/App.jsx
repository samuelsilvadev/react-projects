import React from 'react';
import { connect } from 'react-redux';

import { signOut } from './../../firebase';

import AddGoal from './../goal';

class App extends React.Component {
    render() {
        return (
            <main className="container">
                <AddGoal />
                <button
                    className="btn btn-danger"
                    onClick={this._handleClickSignOut}>
                    Sign Out
                </button>
            </main>
        );
    }

    _handleClickSignOut() {
        signOut();
    }
}

function mapStateToProps(state) {
    const { email } = state;
    return {
        email,
    };
}

export default connect(mapStateToProps, null)(App);