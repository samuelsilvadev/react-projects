import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchAdmins } from '../state/actions/adminsActions';
import withUserAuth from './../hocs/withUserAuth';

export class AdminsPage extends React.PureComponent {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        const { admins = [] } = this.props;

        return (
            <section>
                { this._renderSeoData() }
                <h1>Admins List</h1>
                <ul>
                    { admins.map(this._renderAdminItem) }
                </ul>
            </section>
        );
    }

    _renderAdminItem(admin) {
        return (
            <li key={ admin.id }>
                { admin.name }
            </li>
        )
    }

    _renderSeoData() {
        const { admins = [] } = this.props;
        const helmetTitle = `Admins Page - ${admins.length} Loaded`;

        return (
            <Helmet>
                <title>{ helmetTitle }</title>
                <meta property="og:title" content={ helmetTitle } />
            </Helmet>
        );
    }
}

AdminsPage.loadData = function loadData(store) {
    return store.dispatch(fetchAdmins());
};

function mapStateToProps(state) {
    const { admins } = state;

    return {
        admins: admins.data,
    }
}

export default connect(mapStateToProps, { fetchAdmins })(withUserAuth(AdminsPage))