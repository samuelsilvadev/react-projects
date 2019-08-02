import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, getFormSyncErrors } from 'redux-form';

import { actions } from '@shared/state/auth';

import { FORMS_NAMES } from './constants';
import { setRequiredRule, setIsEmail, setIsValidPassword, setIsPasswordEquals } from './form-rules';

import { WrapperDiv, Form, Label, StyledField, StyledLink, Button, Span } from './Auth.style';

// TODO: show errors from server

const _renderField = ({
	input,
	type,
	meta: { touched, error },
	...rest
}) => {
	return (
		<Fragment>
			<input {...input} {...rest} type={type} />
			{touched && error && <Span>{error}</Span>}
		</Fragment>
	);
};

function SignUp(props) {
	const { handleSubmit, pristine, submitting, valid } = props;

	return (
		<WrapperDiv>
			<Form onSubmit={handleSubmit}>
				<div>
					<Label htmlFor="name">Name</Label>
					<StyledField
						id="name"
						name="name"
						type="text"
						component={_renderField}
						validate={[setRequiredRule]} />
				</div>
				<div>
					<Label htmlFor="email">Email</Label>
					<StyledField
						id="email"
						name="email"
						type="email"
						component={_renderField}
						validate={[setRequiredRule, setIsEmail]} />
				</div>
				<div>
					<Label htmlFor="password">Password</Label>
					<StyledField
						id="password"
						name="password"
						type="password"
						component={_renderField}
						validate={[setRequiredRule, setIsValidPassword]} />
				</div>
				<div>
					<Label htmlFor="confirmPassword">Confirm your Password</Label>
					<StyledField
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						component={_renderField}
						validate={[setRequiredRule, setIsValidPassword, setIsPasswordEquals]} />
				</div>
				<div>
					<Button type="submit" disabled={pristine || submitting || !valid}>
						Sign Up
					</Button>
					<StyledLink to="/sign-in">
						Return
					</StyledLink>
				</div>
			</Form>
		</WrapperDiv>
	);
}

const mapStateToProps = (state) => ({
	formErrors: getFormSyncErrors(FORMS_NAMES.SIGN_UP_FORM)(state)
});

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (values) => dispatch(actions.signUp(values))
});

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	reduxForm({ form: FORMS_NAMES.SIGN_UP_FORM })
);

export default enhance(SignUp);
