import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardSection, Input } from './common';

import { emailChanged, passwordChanged } from './../state/actions';
import { STATE } from '../state/types';

export interface LoginFormProps {
	emailChanged: Function;
	passwordChanged: Function;
	emailValue: string;
	passwordValue: string;
}

export interface LoginFormState {}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
	render() {
		const { emailValue, passwordValue } = this.props; 

		return (
			<Card>
				<CardSection>
					<Input label="Email" placeholder="email@something.com" value={emailValue} onChangeText={this._handleEmailChange} />
				</CardSection>
				<CardSection>
					<Input label="Password" placeholder="password" value={passwordValue} onChangeText={this._handlePasswordChange} secureTextEntry/>
				</CardSection>
				<CardSection>
					<Button text="Login" />
				</CardSection>
			</Card>
		);
	}

	_handleEmailChange = (email) => {
		const { emailChanged } = this.props;

		emailChanged(email);
	};
	
	_handlePasswordChange = (password) => {
		const { passwordChanged } = this.props;

		passwordChanged(password);
	};
}

const mapStateToProps = (state: STATE) => ({
	emailValue: state.auth.email,
	passwordValue: state.auth.password,
});

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
