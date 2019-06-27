/**
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

type Props = {};

type State = {
    email: string,
    password: string,
    error: string,
};

class LoginForm extends React.Component<Props, State> {
    state = {
        email: '',
        password: '',
        error: null,
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
                    <Button text="Login" onPress={ this._handleOnPressButton } />
                </CardSection>
                <Text style={ styles.errorMessage }>
                    { this.state.error }
                </Text>
            </Card>
        );
    }

    _handleOnPressButton = () => {
        const { email, password, error } = this.state;

        error && this.setState({ error: '' });

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.' });
                    })
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