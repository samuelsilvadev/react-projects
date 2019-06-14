import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchUsers } from '../state/actions/userActions';

export class UsersListPage extends React.PureComponent {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users = [] } = this.props;

        return (
            <section>
                { this._renderSeoData() }
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

    _renderSeoData() {
        const { users = [] } = this.props;
        const helmetTitle = `Users Page - ${users.length} Loaded`;

        return (
            <Helmet>
                <title>{ helmetTitle }</title>
                <meta property="og:title" content={ helmetTitle } />
            </Helmet>
        );
    }
}

/**
 * Load data when doing server side rendering.
 * 
 * @param {Object} - Redux store.
 * 
 * @returns {Promise} - Function that contain a Promise to be
 * resolved before component be rendered.
*/
UsersListPage.loadData = function loadData(store) {
    return store.dispatch(fetchUsers());
};

function mapStateToProps(state) {
    const { users } = state;

    return {
        users: users.data,
    }
}

export default connect(mapStateToProps, { fetchUsers })(UsersListPage);