/**
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

type Props = {};

type State = {
    email: string,
    password: string,
    error: string,
    isLoading: boolean,
};

class LoginForm extends React.Component<Props, State> {
    state = {
        email: '',
        password: '',
        error: '',
        isLoading: false,
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="somethin@gmail.com"
                        label="Email"
                        value={ this.state.email }
                        onChangeText={ this._handleEmailChange } />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password" 
                        placeholder="mysecretcode"
                        value={ this.state.password }
                        onChangeText={ this._handlePasswordChange }
                        secureTextEntry />
                </CardSection>
                <CardSection>
                    { this._renderButton() }
                </CardSection>
                <Text style={ styles.errorMessage }>
                    { this.state.error }
                </Text>
            </Card>
        );
    }

    _renderButton() {
        if (this.state.isLoading) {
            return <Spinner size="small" />
        }

        return <Button text="Login" onPress={ this._handleOnPressButton } />;
    }

    _handleOnPressButton = () => {
        const { email, password } = this.state;

        this.setState({
            error: '',
            isLoading: true,
        });

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this._onSignInSuccess)
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this._onSignInSuccess)
                    .catch(this._onSignFail)
            });
    }

    _onSignInSuccess = () => {
        this.setState({
            email: '',
            password: '',
            isLoading: false,
        });
    }

    _onSignFail = () => {
        this.setState({
            error: 'Authentication Failed.',
            isLoading: false,
        });
    }

    _handleEmailChange = (email) => {
        this.setState({ email });
    }
    
    _handlePasswordChange = (password) => {
        this.setState({ password });
    }
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#ff0000',
    }
});

export default LoginForm;