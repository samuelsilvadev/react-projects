import React from 'react';
import { connect } from 'react-redux';

import { goalRef } from './../../firebase';

class GoalList extends React.Component {
    state = {
        goals: [],
    };

    componentDidMount() {
        goalRef.on('value', this._getGoalsFromUser)
    };

    render() {
        const { goals } = this.state;
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
            <li className="list-group-item" key={index} >{goal.goalItem}</li>
        );
    };

    _getGoalsFromUser = (data) => {
        const { email } = this.props;
        const goals = [];

        data.forEach(element => {
            const obj = element.val();
            if (obj.email && obj.email === email) {
                goals.push(obj);
            }
        });

        this.setState({
            goals
        });
    };
};

function mapStateToProps(state) {
    const { email } = state;
    return {
        email,
    }
}

export default connect(mapStateToProps, null)(GoalList);