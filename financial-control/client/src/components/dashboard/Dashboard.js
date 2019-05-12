import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { H1, GridDiv, StyledValueBox } from './Dashboard.style';

import { loadSummary } from '@shared/state/dashboard/actions';

export function Dashboard(props) {
	useEffect(() => {
		const { loadSummary } = props;

		loadSummary();
	}, []);

	const { summary: { data: { credit = 0, debt = 0 } = {} } } = props;

	return (
		<Fragment>
			<H1>Dashboard</H1>
			<GridDiv>
				<StyledValueBox type="credit" title={ `$ ${credit}` } text="Credits Total"/>
				<StyledValueBox type="debit" title={ `$ ${debt}` } text="Debts Total"/>
				<StyledValueBox type="consolidated" title={ `$ ${credit - debt}` } text="Consolidated Value"/>
			</GridDiv>
		</Fragment>
	)
}

Dashboard.propTypes = {
	summary: PropTypes.shape({
		data: PropTypes.shape({
			credit: PropTypes.number,
			debt: PropTypes.number,
		}),
		isLoading: PropTypes.boolean,
		error: PropTypes.any,
	}),
	loadSummary: PropTypes.func,
};

function mapStateToProps(state) {
	return {
		summary: state.dashboard.summary,
	}
}

const mapDispatchToProps = {
	loadSummary,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
