import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Field } from 'redux-form';

export const Fieldset = styled.fieldset`
	padding: 10px;
`;

export const Table = styled.table`
	@media (max-width: 768px) {
		display: block;
	}
`;

export const Th =  Table.withComponent('th');

export const Td = styled.td`
	@media (max-width: 768px) {
		display: block;
		margin-bottom: 3px;
		position: relative;
		padding-left: 50%;

		&::before {
			left: 6px;
			position: absolute;
			padding-right: 10px; 
			text-align: left;
			top: 6px;
			width: 45%; 
			white-space: nowrap;
		}

		&:nth-of-type(1)::before {
			content: 'Name';
		}
		
		&:nth-of-type(2)::before {
			content: 'Value';
		}

		&:nth-of-type(3)::before {
			content: 'Actions';
		}

		&:nth-of-type(4)::before {
			content: '';
		}
		
		${({ isToShowStatus }) => isToShowStatus && css`
			&:nth-of-type(3)::before {
				content: 'Status';
			}

			&:nth-of-type(4)::before {
				content: 'Actions';
			}
		`}
	}

	${({ hasButtons }) => hasButtons && css`
		text-align: center;
	`}
`;

export const Tr = styled.tr`
	@media (max-width: 768px) {
		display: block;

		&:not(:last-child) {
			margin-bottom: 20px;
		}
	}

	& ${Td},
	& ${Th}  {
		width: calc(100% / 3);

		@media (max-width: 768px) {
			width: 100%;
		}
	}

	${({ divideByFour }) => divideByFour && css`
		& ${Td},
		& ${Th} {
			width: 25%;
		
			@media (max-width: 768px) {
				width: 100%;
			}
		}
	`}
`;

export const Thead = styled.thead`
	@media (max-width: 768px) {
		display: block;
	
		& ${Tr} {
			position: absolute;
			top: -9999px;
			left: -9999px;
		}
	}
`;

export const Tbody = Table.withComponent('tbody');

export const Button = styled.button`
	background: none;
	padding: 8px;
	width: 50px;
`;

export const StyledField = styled(Field)`
	border: 1px solid #000;
	font-size: 16px;
	padding: 8px;
	width: 100%;
`;
