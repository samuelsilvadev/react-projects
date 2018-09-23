import React from 'react';
import { connect } from 'react-redux';

import { setGoals } from './../../state/actions';
import { goalRef, completeGoalsRef } from './../../firebase';

import './Goal.css';

class GoalList extends React.Component {

    componentDidMount() {
        goalRef.on('value', this._getGoals)
    };

    render() {
        const { goals } = this.props;
        return (
            <ul className="list-group">
                {
                    goals.map(this._renderGoalItem, this)
                }
            </ul>
        );
    };

    _renderGoalItem(goal, index) {
        return (
            <li className="list-group-item" key={index} >
                <span>
                    {goal.goalItem} <em>Submitted by {goal.email}</em>
                </span>
                <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={this._completeGoal(goal)}>
                    Complete goal
                </button>
            </li>
        );
    };

    _getGoals = (data) => {
        const { setGoals } = this.props;
        const goals = [];

        data.forEach(element => {
            const obj = element.val();
            const key = element.key;
            goals.push(Object.assign({}, obj, { key }));
        });

        setGoals(goals);
    };

    _completeGoal = (goal) => () => {
        const { user: { email } = {} } = this.props;
        const { key, goalItem } = goal;

        completeGoalsRef.push({
            email,
            title: goalItem
        });

        goalRef.child(key).remove();
    };
};

function mapStateToProps(state) {
    const { goals, user } = state;
    return {
        user,
        goals,
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);