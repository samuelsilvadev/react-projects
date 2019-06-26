/**
 *
 * @format
 * @flow
 */

import * as React from 'react';

import { Button, Card, CardSection, Input } from './common';

type Props = {};

type State = {
    email: string,
    password: string,
};

class LoginForm extends React.Component<Props, State> {
    state = {
        email: '',
        password: '',
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
                    <Button text="Login" />
                </CardSection>
            </Card>
        );
    }

    _handleEmailChange = (email) => {
        this.setState({ email });
    }
    
    _handlePasswordChange = (password) => {
        this.setState({ password });
    }
}

export default LoginForm;