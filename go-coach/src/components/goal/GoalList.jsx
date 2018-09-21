import React from 'react';
import { connect } from 'react-redux';

import { setGoals } from './../../state/actions';
import { goalRef } from './../../firebase';

class GoalList extends React.Component {

    componentDidMount() {
        goalRef.on('value', this._getGoals)
    };

    render() {
        const { goals } = this.props;
        return (
            <ul className="list-group">
                {
                    goals.map(this._renderGoalItem)
                }
            </ul>
        );
    };

    _renderGoalItem(goal, index) {
        return (
            <li className="list-group-item" key={index} >{goal.goalItem} <em>Submitted by {goal.email}</em></li>
        );
    };

    _getGoals = (data) => {
        const { setGoals } = this.props;
        const goals = [];

        data.forEach(element => {
            const obj = element.val();
            goals.push(obj);
        });

        setGoals(goals);
    };
};

function mapStateToProps(state) {
    const { goals } = state;
    return {
        goals,
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);