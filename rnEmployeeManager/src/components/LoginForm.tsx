import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardSection, Input } from './common';

import { emailChanged, passwordChanged, login, STATE } from './../state';

export interface LoginFormProps {
	emailChanged: Function;
	passwordChanged: Function;
	login: Function;
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
					<Button text="Login" onPress={this._handleOnPress} />
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

	_handleOnPress = () => {
		const { passwordValue: password, emailValue: email, login } = this.props;

		login({ email, password });
	}
}

const mapStateToProps = ({ auth: { email, password, isLoading, error, user } }: STATE) => ({
	emailValue: email,
	passwordValue: password,
	isLoading,
	error,
	user,
});

export default connect(mapStateToProps, { emailChanged, passwordChanged, login })(LoginForm);
