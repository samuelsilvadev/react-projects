import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function mapStateToProps({ auth }) {
    return {
        isLogged: auth.isLogged
    }
}    

export default function withUserAuth(Component) {
    class UserAuth extends React.Component {
        render() {
            if (this.props.isLogged) {
                return <Component { ...this.props } />
            } else {
                return (
                    <Redirect to="/" />
                );
            }
        }
    }

    if (Component.loadData) {
        UserAuth.loadData = Component.loadData;
    }

    return connect(mapStateToProps)(UserAuth);
}