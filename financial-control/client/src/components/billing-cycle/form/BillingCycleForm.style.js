import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Field } from 'redux-form';

import List from '@components/credit-debit-list';
import Summary from '@components/summary';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	display: block;
`;

export const StyledField = styled(Field, { shouldForwardProp: (prop) => prop !== 'removeMargin' })`
	border: 1px solid #000;
	font-size: 16px;
	margin-bottom: 20px;
	padding: 8px;
	width: 100%;

	${({ removeMargin }) => removeMargin && css`
		margin-bottom: 0;
	`}
`;

export const Button = styled.button`
	border: none;
	background-color: #000;
	color: #fff;
	cursor: pointer;
	padding: 8px;
	width: 100px;
	margin-left: ${({ isCancel }) => isCancel ? '10px' : 0};
`;

export const ButtonWrapperDiv = styled.div`
	display: flex;
`;

export const StyledList = styled(List)`
	margin-bottom: 20px;
`;

export const StyledSummary = styled(Summary)`
	margin: 50px 0;
`;
