import React, { Fragment, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, formValueSelector, arrayInsert } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Form, Label, StyledField, StyledCreditList, Button, ButtonWrapperDiv } from './BillingCycleForm.style';

import { FORMS_NAMES } from '../constants';

export function BillingCycleForm(props) {
	const {
		handleSubmit,
		submitSucceeded,
		onCancel,
		redirect,
		reset,
		isLoading,
		error,
		readOnly,
		submitLabel = 'Save',
		credits,
		canRenderListIfHasNoData,
		add,
	} = props;

	useEffect(() => {
		if (typeof isLoading !== 'undefined' && !isLoading && !error && submitSucceeded) {
			reset();
			redirect && redirect();
		}
	}, [isLoading, error, submitSucceeded]);

	const _handleCancel = useCallback(() => {
		reset();
		onCancel && onCancel();
	}, [onCancel]);

	const onAddCredits = useCallback((index, item) => {
		add(
			FORMS_NAMES.BILLING_CYCLE_FORM,
			'credits',
			index,
			item,
		);
	}, [add])

	return (
		<Fragment>
			<Form onSubmit={handleSubmit}>
				<div>
					<Label htmlFor="name">Name</Label>
					<StyledField id="name" name="name" component="input" readOnly={readOnly} required />
				</div>
				<div>
					<Label htmlFor="month">Month</Label>
					<StyledField id="month" name="month" component="input" readOnly={readOnly} required />
				</div>
				<div>
					<Label htmlFor="year">Year</Label>
					<StyledField id="year" name="year" component="input" readOnly={readOnly} required />
				</div>
				<StyledCreditList
					list={credits}
					readOnly={readOnly}
					canRenderIfHasNoData={ canRenderListIfHasNoData }
					onAdd={ onAddCredits } />
				<ButtonWrapperDiv>
					<Button type="submit">
						{submitLabel}
					</Button>
					<Button type="button" isCancel onClick={_handleCancel}>
						Cancel
				</Button>
				</ButtonWrapperDiv>
			</Form>
		</Fragment>
	)
}

BillingCycleForm.propTypes = {
	onSubmit: PropTypes.func,
	onCancel: PropTypes.func,
	handleSubmit: PropTypes.func,
	redirect: PropTypes.func,
	readOnly: PropTypes.bool,
	isLoading: PropTypes.bool,
	submitSucceeded: PropTypes.bool,
	error: PropTypes.any,
	submitLabel: PropTypes.string,
	canRenderList: PropTypes.bool,
};

const selector = formValueSelector(FORMS_NAMES.BILLING_CYCLE_FORM);

function mapStateToProps(state) {
	return {
		credits: selector(state, 'credits'),
	}
}

const mapDispatchToProps = {
	add: arrayInsert,
};

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	reduxForm({ form: FORMS_NAMES.BILLING_CYCLE_FORM }),
);

export default enhance(BillingCycleForm);
