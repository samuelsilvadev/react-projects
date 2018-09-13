import React from 'react';

import { createUser } from './signUp.service';

import './SignUp.css';
class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
    };

    render() {
        return (
            <form
                className="signUpForm"
                autoComplete="off"
                onSubmit={ this._onHandleSubmit }>
                <input 
                    className="form-control"
                    name="email"
                    type="email" 
                    placeholder="Email"
                    required
                    onChange={ this._onHandleChange }/>
                <input
                    className="form-control" 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    required
                    onChange={ this._onHandleChange }/>
                <button 
                    className="btn btn-primary btn-block">Save</button>
            </form>
        );
    }

    _onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _onHandleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        createUser({ email, password }); 
    }
}

export default SignUp;