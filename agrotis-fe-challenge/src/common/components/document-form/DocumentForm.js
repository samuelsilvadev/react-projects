import React from 'react';
import styled from 'styled-components';

import { gteSmallMedia } from '../../media.style';

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, auto);
	grid-gap: 4rem;
	width: 100%;

	${gteSmallMedia} {
		grid-template-columns: 20% calc(80% - 4rem);
		grid-template-rows: auto;
	}
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Span = styled.span`
	bottom: 0;
	position: absolute;
	right: 0;
	transform: translateY(130%);
	font-size: 1.4rem;
`;

const Input = styled.input`
	border: none;
	border-bottom: 0.1rem solid #e6dcdc;
	height: 3rem;
	font-size: 1.6rem;
`;

const Label = styled.label`
	font-size: 1.5rem;
	color: #797474;
`;

function DocumentForm(props) {
	return (
		<Form {...props}>
			<Div>
				<Label htmlFor="name">Name</Label>
				<Input id="name" type="text" />
				<Span>0/20</Span>
			</Div>
			<Div>
				<Label htmlFor="description">Description</Label>
				<Input id="description" type="text" />
				<Span>0/240</Span>
			</Div>
		</Form>
	);
}

export default DocumentForm;
