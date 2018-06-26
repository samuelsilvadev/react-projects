import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUpForm from '../forms/SignUpForm';
import signup from '../../actions/users';


class SignUpPage extends React.Component {

    submit = data => this.props.signup(data)
        .then(() => this.props.history.push('/dashboard'));

    render() {
        return (
            <div>
                <SignUpForm submit={this.submit} />
            </div>
        );
    }
}

SignUpPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignUpPage);