import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArrowRight } from '../components';
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

function Register(props) {
	const handleClickBack = () => {
		props.history.push('/');
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
					<SaveButton>Save</SaveButton>
				</Div>
			</TopBarDiv>
			<ContentDiv />
		</section>
	);
}

Register.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func
	})
};

export default Register;
