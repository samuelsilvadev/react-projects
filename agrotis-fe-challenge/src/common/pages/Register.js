import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArrowRight, DocumentForm } from '../components';
import { TopBarDiv, ContentDiv } from './Template';

const StyledArrowRight = styled(ArrowRight)`
	transform: rotate(180deg);
	fill: #fff;
	height: 2rem;
	width: 2rem;
`;

const Button = styled.button`
	background: none;
	border: none;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.6rem;
`;

const SaveButton = styled(Button)`
	background-color: rgba(0, 0, 0, 0.2);
	padding: 1rem 2.5rem;
	margin-left: 5rem;
`;

const H1 = styled.h1`
	margin-left: 1.5rem;
`;

const Div = styled.div`
	display: flex;
`;

const StyledDocumentForm = styled(DocumentForm)`
	margin-top: 3rem;
`;

const FORM_ID = 'register-form';

function Register(props) {
	const handleClickBack = () => {
		props.history.push('/');
	};

	const handleOnSubmit = (values, actions) => {
		console.log('submitting', values);
		setTimeout(() => {
			console.log('submitted');
			actions.setSubmitting(false);
		}, 2000);
	};

	return (
		<section>
			<TopBarDiv>
				<Div>
					<Button
						onClick={handleClickBack}
						aria-label="Click to return to Document State page"
					>
						<StyledArrowRight />
					</Button>
					<H1>State</H1>
				</Div>
				<Div>
					<Button onClick={handleClickBack}>Back</Button>
					<SaveButton form={FORM_ID} type="submit">
						Save
					</SaveButton>
				</Div>
			</TopBarDiv>
			<ContentDiv>
				<StyledDocumentForm
					formId={FORM_ID}
					onSubmit={handleOnSubmit}
				/>
			</ContentDiv>
		</section>
	);
}

Register.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func
	})
};

export default Register;
