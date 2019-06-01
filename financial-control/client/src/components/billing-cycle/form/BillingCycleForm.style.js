import styled from '@emotion/styled';
import { Field } from 'redux-form';

import List from '@components/credit-debit-list';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	display: block;
`;

export const StyledField = styled(Field)`
	font-size: 16px;
	margin-bottom: 20px;
	padding: 8px;
	width: 100%;
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
