import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, getFormSyncErrors } from 'redux-form';

import { actions } from '@shared/state/auth'

import { FORMS_NAMES } from './constants';

import { WrapperDiv, Form, Label, StyledField, StyledLink, Button, Span } from './Auth.style';

const setRequiredRule = value => typeof value !== 'undefined' ? undefined : 'Field is required';

function SignIn(props) {
	const { handleSubmit, pristine, submitting, formErrors, valid, dirty, anyTouched } = props;

	return (
		<WrapperDiv>
			<Form onSubmit={handleSubmit}>
				<div>
					<Label htmlFor="email">Email</Label>
					<StyledField id="email" name="email" type="email" component="input" validate={[setRequiredRule]} />
					{(dirty || anyTouched) && <Span>{formErrors['email']}</Span>}
				</div>
				<div>
					<Label htmlFor="password">Password</Label>
					<StyledField id="password" name="password" type="password" component="input" validate={[setRequiredRule]} />
					{(dirty || anyTouched) && <Span>{formErrors['password']}</Span>}
				</div>
				<div>
					<Button type="submit" disabled={pristine || submitting || !valid}>
						Sign in
					</Button>
					<StyledLink to="/sign-up">
						Sign up
					</StyledLink>
				</div>
			</Form>
		</WrapperDiv >
	);
}

const mapStateToProps = (state) => ({
	formErrors: getFormSyncErrors(FORMS_NAMES.SIGN_IN_FORM)(state)
});

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (values) => dispatch(actions.signIn(values))
});

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	reduxForm({ form: FORMS_NAMES.SIGN_IN_FORM })
);

export default enhance(SignIn);
