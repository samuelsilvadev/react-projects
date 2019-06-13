import React from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from '../state/actions/adminsActions';

export class AdminsPage extends React.PureComponent {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        const { admins = [] } = this.props;

        return (
            <section>
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

export default connect(mapStateToProps, { fetchAdmins })(AdminsPage)