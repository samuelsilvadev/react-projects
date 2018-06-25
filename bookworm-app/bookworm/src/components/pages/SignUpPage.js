import React from 'react';
import PropTypes from 'prop-types';

class SignUp extends React.Component {
    submit = data => this.props.signup(data)
        .then(() => this.props.history.push('/dashboard'));

    render() {
        return <div>SignUp Form</div>
    }
}

SignUp.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default SignUp;