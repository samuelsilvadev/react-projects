import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../state/actions/userActions';

export class UsersList extends React.PureComponent {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users = [] } = this.props;

        return (
            <section>
                <h1>Users List</h1>
                <ul>
                    { users.map(this._renderUserItem) }
                </ul>
            </section>
        );
    }

    _renderUserItem(user) {
        return (
            <li key={ user.id }>
                { user.name }
            </li>
        )
    }
}

function mapStateToProps(state) {
    const { users } = state;

    return {
        users: users.data,
    }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);