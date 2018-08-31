import React from 'react';
import { connect } from 'react-redux';

import { addReminder } from '../../state/actions/index';

import './App.css';

class App extends React.Component {

    state = {
        text: '',
    };

    render() {
        return (
            <div className="App container">
                <h1 className="App__title">
                    Reminder Pro
                </h1>
                <form>
                    <div className="row">
                        <div className="form-group col-md-10 no--padding ">
                            <label className="sr-only" htmlFor="i-have-to">I have to...</label>
                            <input
                                id="i-have-to"
                                type="text"
                                placeholder="I have to..."
                                className="form-control"
                                onChange={this._handleOnChangeButton} />
                        </div>
                        <div className="form-group col-md-2 no--padding ">
                            <button
                                type="button"
                                className="btn btn-success btn-block"
                                onClick={this._addReminder}>
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {this._renderListReminders()}
                    </div>
                </form>
            </div>
        )
    }

    _addReminder = () => {
        const { addReminder: addAction } = this.props;
        const { text } = this.state;
        addAction(text);
    }

    _handleOnChangeButton = (e) => {
        this.setState({
            text: e.target.value,
        });
    }

    _renderListReminders = () => {
        const { reminders } = this.props;
        return (
            <ul className="list-group">
            {
                reminders.map(reminder => {
                    return <li className="list-group-item" key={reminder.id}>{reminder.text}</li>
                })
            }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        reminders: state,
    };
}

export default connect(mapStateToProps, { addReminder })(App);