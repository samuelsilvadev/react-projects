import React from 'react';
import { connect } from 'react-redux';

import { setCompletedGoals } from './../../state/actions';
import { completeGoalsRef } from './../../firebase';

class GoalsCompletedList extends React.Component {

    componentDidMount() {
        completeGoalsRef.on('value', this._getGoals)
    }

    render() {
        const { completedGoals } = this.props;
        return (
            <ul className="list-group">
                {
                    completedGoals.map(this._renderGoalItem, this)
                }
            </ul>
        );
    };

    _renderGoalItem(goal, index) {
        return (
            <li className="list-group-item" key={index} >
                <span>
                    {goal.goalItem} <em>Completed by {goal.email}</em>
                </span>
            </li>
        );
    };

    _getGoals = (data) => {
        const { setCompletedGoals } = this.props;
        const goals = [];

        data.forEach(element => {
            const obj = element.val();
            goals.push(obj);
        });

        setCompletedGoals(goals);
    };
}

function mapStateToProps(state) {
    const { completedGoals } = state;
    return {
        completedGoals,
    }
}

export default connect(mapStateToProps, { setCompletedGoals })(GoalsCompletedList);