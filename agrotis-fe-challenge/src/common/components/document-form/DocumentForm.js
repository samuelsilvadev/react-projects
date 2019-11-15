import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { gteSmallMedia } from '../../media.style';

const StyledForm = styled(Form)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, auto);
	grid-gap: 4rem;
	position: relative;
	width: 100%;

	${gteSmallMedia} {
		grid-template-columns: 20% calc(80% - 4rem);
		grid-template-rows: auto;
	}

	&[disabled] {
		cursor: not-allowed;
		pointer-events: none;
	}
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Span = styled.span`
	font-size: 1.2rem;
	text-align: right;
`;

const StyledField = styled(Field)`
	border: none;
	border-bottom: 0.1rem solid #e6dcdc;
	height: 3rem;
	font-size: 1.6rem;
`;

const Label = styled.label`
	font-size: 1.5rem;
	color: #797474;
`;

const ErrorSpan = styled.span`
	color: #fd0431;
	font-size: 1.2rem;
`;

const FlexSpan = styled.span`
	display: flex;
`;

const AdditionalInfoDiv = styled.div`
	align-items: flex-start;
	display: grid;
	grid-template-columns: 80% 20%;
	grid-template-rows: auto;
	bottom: 0;
	left: 0;
	position: absolute;
	transform: translateY(calc(100% + 0.5rem));
	width: 100%;
`;

const INITIAL_VALUES = {
	name: '',
	description: ''
};

const REQUIRED_MESSAGE = 'Field is required';

const VALIDATION_SCHEME = Yup.object().shape({
	name: Yup.string()
		.max(20)
		.required(REQUIRED_MESSAGE),
	description: Yup.string()
		.max(240)
		.required(REQUIRED_MESSAGE)
});

const CustomErrorMessage = ({ name }) => (
	<FlexSpan>
		<ErrorMessage name={name}>
			{(message) => <ErrorSpan>{message}</ErrorSpan>}
		</ErrorMessage>
	</FlexSpan>
);

CustomErrorMessage.propTypes = {
	name: PropTypes.string.isRequired
};

function DocumentForm(props) {
	const { onSubmit, formId, ...remainingProps } = props;

	return (
		<Formik
			validationSchema={VALIDATION_SCHEME}
			initialValues={INITIAL_VALUES}
			onSubmit={onSubmit}
		>
			{({ isSubmitting, values: { name, description } }) => (
				<StyledForm
					id={formId}
					disabled={isSubmitting}
					{...remainingProps}
				>
					<Div>
						<Label htmlFor="name">Name</Label>
						<StyledField id="name" type="text" name="name" />
						<AdditionalInfoDiv>
							<CustomErrorMessage name="name" />
							<Span>{name.length}/20</Span>
						</AdditionalInfoDiv>
					</Div>
					<Div>
						<Label htmlFor="description">Description</Label>
						<StyledField
							id="description"
							type="text"
							name="description"
						/>
						<AdditionalInfoDiv>
							<CustomErrorMessage name="description" />
							<Span>{description.length}/240</Span>
						</AdditionalInfoDiv>
					</Div>
				</StyledForm>
			)}
		</Formik>
	);
}

DocumentForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	formId: PropTypes.string.isRequired
};

export default DocumentForm;
