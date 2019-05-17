import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '@shared/state/billing-cycle';

import { Table, Thead, Th, Td, Tr } from './BillingCycleList.style';

export function BillingCycleList(props) {
	const { list = [], getList } = props;

	useEffect(() => {
		getList();
	}, []);

	const _renderTableRow = (data) => (
		<Tr key={ data._id }>
			<Td>{ data.name }</Td>
			<Td>{ data.month }</Td>
			<Td>{ data.year }</Td>
		</Tr>
	);

	return (
		<Table>
			<Thead>
				<tr>
					<Th>Name</Th>
					<Th>Month</Th>
					<Th>Year</Th>
				</tr>
			</Thead>
			<tbody>
				{ list.map(_renderTableRow) }
			</tbody>
		</Table>
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
