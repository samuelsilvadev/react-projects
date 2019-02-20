import React from 'react';
import { connect } from 'react-redux';

import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from './../../state/types';
import { setVisibilityFilter } from './../../state/actions-creators';

import './Filter.css';

const FILTERS =  [
	{ label: 'All', action: SHOW_ALL },
	{ label: 'Completed', action: SHOW_COMPLETED },
	{ label: 'Todo', action: SHOW_ACTIVE },
];

export const Filter = ({ activeFilter, updateFilter }) => {
	const _handleClick = (filter) => () => {
		updateFilter(filter);
	};
	
	const _renderFilterItem = (filter) => {
		const isDisabled = activeFilter === filter.action;

		return (
			<button
				key={ filter.action }
				className='btn'
				disabled={ isDisabled }
				onClick={ !isDisabled ? _handleClick(filter.action) : undefined }>{ filter.label }</button>
		);
	};

	return (
		<section>
			<h2>Filter by:</h2>
			{ FILTERS.map(_renderFilterItem) }
		</section>
	);
};

const mapStateToProps = (state) => ({
	activeFilter: state.visibilityFilters,
});

const mapDispatchToProps = (dispatch) => ({
	updateFilter: (filter) => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
