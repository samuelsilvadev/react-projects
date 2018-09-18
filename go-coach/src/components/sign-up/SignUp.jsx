import React from 'react';
import { Link } from 'react-router';

import { createUser } from './../../firebase';

import './../forms.css';

const ROUTE_SIGNIN = '/signin';
const GENERAL_SUCCESS_MESSAGE = 'Welcome! Your user was created correctly.'
class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        success: {
            message: '',
        },
        error: {
            message: '',
        },
        disabledSubmitButton: false,
    };

    render() {

        const {
            error: { message: errorMsg },
            success: { message: successMsg },
            disabledSubmitButton
        } = this.state;

        return (
            <section className="wrapperForm">
                <h2>Sign Up</h2>
                <form
                    className="form"
                    autoComplete="off"
                    onSubmit={this._onHandleSubmit}>
                    <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        onChange={this._onHandleChange} />
                    <input
                        className="form-control"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        onChange={this._onHandleChange} />
                    <button
                        className="btn btn-primary btn-block"
                        disabled={disabledSubmitButton}>Save</button>
                </form>
                {errorMsg && this._renderErrorMessage(errorMsg)}
                {successMsg && this._renderSuccessMessage(successMsg)}
                <Link to={ROUTE_SIGNIN}>Already an user? Sing in instead.</Link>
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

    _onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _onHandleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            disabledSubmitButton: true,
            error: { message: '' },
            success: { message: '' },
        }, this._saveUser);
    }

    _saveUser() {
        const { email, password } = this.state;
        createUser({ email, password })
            .then((data) => {
                if (data) {
                    this.setState({
                        success: { message: GENERAL_SUCCESS_MESSAGE },
                        disabledSubmitButton: false,
                    })
                }
            })
            .catch((error) => {
                this.setState({
                    error,
                    disabledSubmitButton: false,
                })
            });
    }
}

export default SignUp;