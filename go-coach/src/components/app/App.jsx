import React from 'react';
import { Link } from 'react-router';

import { signOut } from './../../firebase';
import { AddGoal, GoalList, GoalsCompletedList } from './../goal';

const TABS = {
    GOAL_LIST: 'goalList',
    GOAL_COMPLETED_LIST: 'goalCompletedList',
};

class App extends React.Component {
    state = {
        selectedTab: TABS.GOAL_LIST,
    }

    render() {
        return (
            <main className="container">
                <AddGoal />
                <ul className="nav nav-tabs">
                    <li className={this._isTabActive(TABS.GOAL_LIST) ? 'active' : null} onClick={this._handleClickTab(TABS.GOAL_LIST)}>
                        <a data-toggle="tab" href="#goalList">Goal List</a>
                    </li>
                    <li className={this._isTabActive(TABS.GOAL_COMPLETED_LIST) ? 'active' : null} onClick={this._handleClickTab(TABS.GOAL_COMPLETED_LIST)}>
                        <a data-toggle="tab" href="#goalListCompleted">Completed Goals</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="goalList" className={ 'tab-pane' + (this._isTabActive(TABS.GOAL_LIST) ? 'active' : '') }>
                        <GoalList />
                    </div>
                    <div id="goalListCompleted" className={ 'tab-pane' + (this._isTabActive(TABS.GOAL_COMPLETED_LIST) ? 'active' : '')}>
                        <GoalsCompletedList />
                    </div>
                </div>
                <button
                    className="btn btn-danger"
                    onClick={this._handleClickSignOut}>
                    Sign Out
                </button>
            </main>
        );
    }

    _isTabActive(tab) {
        const { selectedTab } = this.state;
        return selectedTab === tab;
    }

    _handleClickSignOut() {
        signOut();
    }
    
    _handleClickTab = (tab) => () => {
        console.log(tab);
        this.setState({
            selectedTab: tab,
        })
    }
}

export default App;