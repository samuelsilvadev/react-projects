import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError'

class SignUpForm extends React.Component {

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

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true })
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
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
            <Form onSubmit={this.onSubmit} loading={this.state.loading}>
                {this.state.errors.global && <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{this.state.errors.global}</p>
                </Message>}
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

                <Button primary>Sign Up</Button>
            </Form>
        );
    }
}

SignUpForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default SignUpForm;