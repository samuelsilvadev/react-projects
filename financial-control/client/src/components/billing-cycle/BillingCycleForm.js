import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Form, Label, StyledField, Button } from './BillingCycleForm.style';

import { FORMS_NAMES } from './constants';

export function BillingCycleForm(props) {
	const { handleSubmit, reset, isLoading, error } = props;

	useEffect(() => {
		if(typeof isLoading !== 'undefined' && !isLoading && !error) {
			reset();
		}
	}, [isLoading, error]);
	
	return (
		<Form onSubmit={ handleSubmit }>
			<div>
				<Label htmlFor="name">Name</Label>
				<StyledField id="name" name="name" component="input" required />
			</div>
			<div>
				<Label htmlFor="month">Month</Label>
				<StyledField id="month" name="month" component="input" required />
			</div>
			<div>
				<Label htmlFor="year">Year</Label>
				<StyledField id="year" name="year" component="input" required />
			</div>
			<Button type="submit">
				Save
			</Button>
		</Form>
	)
}

BillingCycleForm.propTypes = {
	onSubmit: PropTypes.func,
	isLoading: PropTypes.bool,
	error: PropTypes.any,
};

function mapStateToProps(state) {
	const { isLoading, error } = state.billingCycle.register;
	
	return {
		isLoading,
		error,
	}
}

const enhance = compose(
	reduxForm({ form: FORMS_NAMES.BILLING_CYCLE_FORM }),
	connect(mapStateToProps),
);

export default enhance(BillingCycleForm);
