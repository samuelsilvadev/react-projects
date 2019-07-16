import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, CardSection, Input, Spinner } from './common';

import { emailChanged, passwordChanged, login, STATE } from './../state';

interface Error {
	code: string;
	message: string;
}

export interface LoginFormProps {
	emailChanged: Function;
	passwordChanged: Function;
	login: Function;
	emailValue: string;
	passwordValue: string;
	error: Error;
	isLoading: boolean;
}

class LoginForm extends React.Component<LoginFormProps> {
	render() {
		const { emailValue, passwordValue, isLoading } = this.props;

		return (
			<Card>
				<CardSection>
					<Input label="Email" placeholder="email@something.com" value={emailValue} onChangeText={this._handleEmailChange} />
				</CardSection>
				<CardSection>
					<Input label="Password" placeholder="password" value={passwordValue} onChangeText={this._handlePasswordChange} secureTextEntry/>
				</CardSection>
				{ this._renderError() }
				<CardSection>
				{
					isLoading ?
						<Spinner size="large" /> :
						<Button text="Login" onPress={this._handleOnPress} />
				}
				</CardSection>
			</Card>
		);
	}

	_renderError() {
		if(this.props.error && this.props.error.message) {
			return (
				<View style={styles.errorContainer}>
					<Text style={styles.error}>
						{this.props.error.message}
					</Text>
				</View>
			)
		}
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

const styles = StyleSheet.create({
	errorContainer: {
		backgroundColor: '#fff'
	},
	error: {
		alignSelf: 'center',
		color: '#f00',
		fontSize: 20,
		paddingTop: 10,
		paddingBottom: 10,
	}
});

const mapStateToProps = ({ auth: { email, password, isLoading, error, user } }: STATE) => ({
	emailValue: email,
	passwordValue: password,
	isLoading,
	error,
	user,
});

export default connect(mapStateToProps, { emailChanged, passwordChanged, login })(LoginForm);
