import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '@shared/state/billing-cycle';

import { Table, Thead, Th, Td, Tr, ErrorP, LoadingP, Button } from './BillingCycleList.style';

export function BillingCycleList(props) {
	const {
		list = [],
		getList,
		isLoading,
		error,
		onEdit,
		onRemove,
		showEdit = false,
		showRemove = false,
	} = props;

	useEffect(() => {
		getList();
	}, []);

	if (isLoading) {
		return (
			<LoadingP>
				Loading...
			</LoadingP>
		);
	}

	if (error) {
		return (
			<ErrorP>
				Something went wrong
			</ErrorP>
		);
	}

	const shouldRenderActionsTag = showEdit || showRemove;

	const _handleClickEdit = (data) => () => {
		onEdit(data)
	};
	
	const _handleClickRemove = (data) => () => {
		onRemove(data)
	};

	const _renderTableRow = (data) => (
		<Tr key={ data._id }>
			<Td>{ data.name }</Td>
			<Td>{ data.month }</Td>
			<Td>{ data.year }</Td>
			{ shouldRenderActionsTag &&
				<Td isActions>
					{ showEdit && <Button onClick={ _handleClickEdit(data) }>Edit</Button> }
					{ showRemove && <Button onClick={ _handleClickRemove(data) }>Remove</Button> }
				</Td>
			}
		</Tr>
	);

	return (
		<Table>
			<Thead>
				<tr>
					<Th>Name</Th>
					<Th>Month</Th>
					<Th>Year</Th>
					{ shouldRenderActionsTag &&
						<Th isActions>Actions</Th>
					}
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
	onEdit: PropTypes.func,
	onRemove: PropTypes.func,
	isLoading: PropTypes.bool,
	error: PropTypes.any,
	showEdit: PropTypes.bool,
	showRemove: PropTypes.bool,
};

function mapStateToProps(state) {
	const { data, isLoading, error } = state.billingCycle.list;
	
	return {
		list: data,
		isLoading,
		error,
	}
}

const mapDispatchToProps = {
	getList: actions.getList
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
