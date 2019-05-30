import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Field } from 'redux-form';

export const Fieldset = styled.fieldset`
	padding: 10px;
`;

export const Table = styled.table`
	width: 100%;
`;

export const Th = styled.th`
	width: calc(100% / 3);
`;

export const Td = styled.td`
	width: calc(100% / 3);

	${({ hasButtons }) => hasButtons && css`
		text-align: center;
	`}
`;

export const Button = styled.button`
	background: none;
	padding: 8px;
	width: 50px;
`;

export const StyledField = styled(Field)`
	font-size: 16px;
	padding: 8px;
	width: 100%;
`;
