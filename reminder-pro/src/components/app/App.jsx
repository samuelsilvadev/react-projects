import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Notifications, { notify } from 'react-notify-toast';

import { addReminder, deleteReminder, clearAllReminders } from '../../state/actions/index';

import './App.css';
import ListItems from '../list-items/ListItems';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            dueDate: '',
        };
    }

    _addReminder = () => {
        const { addReminder: addAction } = this.props;
        const { text, dueDate } = this.state;

        if (!text && !dueDate) {
            notify.show('Invalid Fields!', 'error');
            return;
        }
        addAction({ text, dueDate });
    }

    _deleteReminder = (id) => () => {
        const { deleteReminder: deleteAction } = this.props;
        deleteAction(id);
    }

    _handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    _handleOnSubmit = () => {
        this._addReminder();
    }

    _clearAllReminders = () => {
        const { clearAllReminders: clearAllRemindersAction } = this.props;
        clearAllRemindersAction();
    }

    render() {
        const { reminders } = this.props;

        return (
            <div className="App container">
                <Notifications />
                <h1 className="App__title">
                    Reminder Pro
                </h1>
                <form autoComplete="off" onSubmit={this._handleOnSubmit}>
                    <div className="row container-flex--column ">
                        <div className="form-group no--padding ">
                            <label className="sr-only" htmlFor="i-have-to">I have to...</label>
                            <input
                                id="i-have-to"
                                type="text"
                                name="text"
                                required
                                placeholder="I have to..."
                                className="form-control"
                                onChange={this._handleOnChange}
                            />
                        </div>
                        <div className="form-group no--padding ">
                            <label className="sr-only" htmlFor="due-date">Due date</label>
                            <input
                                id="due-date"
                                type="datetime-local"
                                name="dueDate"
                                required
                                className="form-control"
                                onChange={this._handleOnChange}
                            />
                        </div>
                        <div className="form-group no--padding ">
                            <button
                                type="button"
                                className="btn btn-success btn-block"
                                onClick={this._addReminder}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                    <section className="container-flex--column">
                        <div className="row no--margin">
                            <ListItems reminders={reminders} deleteReminder={this._deleteReminder} />
                        </div>
                        <div>
                            {!!reminders.length && <button type="button" className="btn btn-danger btn-block" onClick={this._clearAllReminders}>Clear all Reminders</button>}
                        </div>
                    </section>
                </form>
            </div>
        );
    }
}

App.propTypes = {
    reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
    addReminder: PropTypes.func.isRequired,
    deleteReminder: PropTypes.func.isRequired,
    clearAllReminders: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        reminders: state,
    };
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearAllReminders })(App);
