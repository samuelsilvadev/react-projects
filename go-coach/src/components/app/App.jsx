import React from 'react';

import { signOut } from './../../firebase';
import { AddGoal, GoalList, GoalsCompletedList } from './../goal';

class App extends React.Component {
    render() {
        return (
            <main className="container">
                <AddGoal />
                <GoalList />
                <GoalsCompletedList />
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

export default App;