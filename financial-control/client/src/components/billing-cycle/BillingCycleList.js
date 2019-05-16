import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '@shared/state/billing-cycle';

export function BillingCycleList(props) {
	const { list = [], getList } = props;

	useEffect(() => {
		getList();
	}, []);

	const _renderTableRow = (data) => (
		<tr key={ data.id }>
			<td>{ data.name }</td>
			<td>{ data.month }</td>
			<td>{ data.year }</td>
		</tr>
	);

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Month</th>
					<th>Year</th>
				</tr>
			</thead>
			<tbody>
				{ list.map(_renderTableRow) }
			</tbody>
		</table>
	)
}

BillingCycleList.propTypes = {
	list: PropTypes.array,
	getList: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		list: state.billingCycle.list
	}
}

const mapDispatchToProps = {
	getList: actions.getList
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
