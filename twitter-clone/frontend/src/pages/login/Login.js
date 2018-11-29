'use strict';

import React from 'react';

import CONSTANTS from '../../constants';

import { Logo } from '../../components';

import './Login.css';

const Login = React.createClass({
	getInitialState: function getInitialState() {
		return {
			username: '',
		};
	},
	render: function render() {
		return (
			<div className='signin-wrapper'>
				<Logo className='signin-logo'/>
				<form onSubmit={this._handleFormSubmit} className='signin-form'>
					<input
						className='signin-form__input'
						placeholder='Username'
						type='text'
						value={this.state.username}
						onChange={this._handleInputChange}
					/>
					<button className='signin-form__button' type='submit'>
						Sign in
					</button>
				</form>
			</div>
		);
	},
	_handleInputChange: function _handleInputChange(event) {
		this.setState({
			username: event.target.value,
		});
	},
	_handleFormSubmit: function _handleFormSubmit(event) {
		event.preventDefault();

		const { username } = this.state;

		if (!username) {
			return;
		}

		const { storage } = CONSTANTS;
		const { history } = this.props;

		window.localStorage.setItem(storage.username, username);
		history.push('/timeline');
	},
});

export default Login;
