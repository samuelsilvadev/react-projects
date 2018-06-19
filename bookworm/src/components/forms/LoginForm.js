import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError'

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            data: {
                email: '',
                password: ''
            },
            loading: false,
            errors: {}
        }
    }

    onChange = e => this.setState({
        data: {
            ...this.state.data, [e.target.name]: e.target.value
        }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data)
        }
    }

    validate = data => {
        const errors = {}
        if (!data.email || !Validator.isEmail(data.email)) errors.email = 'Invalid email';
        if (!data.password) errors.password = 'Can\'t be blank';
        return errors;
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!this.state.errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="example@examplle.com"
                        value={this.state.data.email}
                        onChange={this.onChange}
                    />
                    {this.state.errors.email && <InlineError text={this.state.errors.email} />}
                </Form.Field>
                <Form.Field error={!!this.state.errors.password}>
                    <label htmlFor="email">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.data.password}
                        onChange={this.onChange}
                    />
                    {this.state.errors.password && <InlineError text={this.state.errors.password} />}
                </Form.Field>

                <Button primary>Login</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;