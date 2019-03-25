import styled from '@emotion/styled';

import { BACKGROUND_COLOR, WHITE } from '../style';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 320px;

	& > :last-child {
		margin-top: 20px;
	}
`;

export const Input  = styled.input`
	height: 50px;

	&:focus {
		outline-color: ${BACKGROUND_COLOR};
	}
`;

export const Button  = styled.button`
	border: 0;
	background-color: ${BACKGROUND_COLOR};
	cursor: pointer;
	color: ${WHITE};
	height: 50px;
`;
