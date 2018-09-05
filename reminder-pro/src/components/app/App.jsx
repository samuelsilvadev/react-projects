import React from 'react';
import { connect } from 'react-redux';

import { addReminder, deleteReminder } from '../../state/actions/index';

import './App.css';
import ListItems from '../list-items/ListItems';

class App extends React.Component {

    state = {
        text: '',
        dueDate: '',
    };

    render() {
        const { reminders } = this.props;

        return (
            <div className="App container">
                <h1 className="App__title">
                    Reminder Pro
                </h1>
                <form autoComplete="off">
                    <div className="row">
                        <div className="form-group col-md-5 no--padding ">
                            <label className="sr-only" htmlFor="i-have-to">I have to...</label>
                            <input
                                id="i-have-to"
                                type="text"
                                name="text"
                                placeholder="I have to..."
                                className="form-control"
                                onChange={this._handleOnChange} />
                        </div>
                        <div className="form-group col-md-5 no--padding ">
                            <label className="sr-only" htmlFor="due-date">Due date</label>
                            <input
                                id="due-date"
                                type="datetime-local"
                                name="dueDate"
                                className="form-control"
                                onChange={this._handleOnChange} />
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
                        <ListItems
                            reminders={reminders}
                            deleteReminder={this._deleteReminder} />
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

    _deleteReminder = (id) => () => {
        const { deleteReminder: deleteAction } = this.props;
        deleteAction(id);
    }

    _handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
}

function mapStateToProps(state) {
    return {
        reminders: state,
    };
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);