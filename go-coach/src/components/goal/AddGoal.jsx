import React from 'react';
import { connect } from 'react-redux';

import { goalRef } from './../../firebase';

import './../forms.css';
import './AddGoal.css';

const GENERAL_SUCCESS_MESSAGE = 'Item saved succesfully.'

class AddGoal extends React.Component {
    state = {
        goalItem: '',
        success: {
            message: '',
        },
        error: {
            message: '',
        },
        disabledSubmitButton: false,
    }

    render() {
        const {
            error: { message: errorMsg },
            success: { message: successMsg },
            goalItem,
            disabledSubmitButton
        } = this.state;

        return (
            <section className="wrapperForm">
                <h2>Save goals</h2>
                <form
                    className="form"
                    autoComplete="off"
                    onSubmit={this._onHandleSubmit}>
                    <input
                        className="form-control"
                        name="goalItem"
                        type="text"
                        placeholder="Add a goal"
                        required
                        value={goalItem}
                        onChange={this._onHandleChange} />
                    <button
                        className="btn btn-primary btn-block"
                        disabled={disabledSubmitButton}>
                        Save
                </button>
                </form>
                {errorMsg && this._renderErrorMessage(errorMsg)}
                {successMsg && this._renderSuccessMessage(successMsg)}
            </section>
        );
    }
    _renderErrorMessage(message) {
        return (
            <div className="alert alert-danger">
                {message}
            </div>
        )
    }

    _renderSuccessMessage(message) {
        return (
            <div className="alert alert-success">
                {message}
            </div>
        )
    }

    _saveGoalItem() {
        const { goalItem } = this.state;
        const { email } = this.props;

        goalRef.push({
            email,
            goalItem
        }, this._handleErrorSaveItem);
    }

    _onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _onHandleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            error: { message: '' },
            success: { message: '' },
            disabledSubmitButton: true,
        }, this._saveGoalItem);
    }

    _handleErrorSaveItem = (error) => {
        if (!error) {
            this.setState({
                success: { message: GENERAL_SUCCESS_MESSAGE },
                goalItem: '',
                disabledSubmitButton: false,
            });
        } else {
            this.setState({
                error,
                disabledSubmitButton: false,
            });
        }
    }
}

function mapStateToProps(state) {
    const { email } = state;
    return {
        email,
    }
}

export default connect(mapStateToProps, null)(AddGoal);