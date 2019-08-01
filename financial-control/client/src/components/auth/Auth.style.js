import styled from '@emotion/styled';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

export const WrapperDiv = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100%;
`;

export const Form = styled.form`
	display: flex;
    border: 1px solid #000;
	flex-direction: column;
	padding: 20px;
	width: 400px;
`;

export const Label = styled.label`
	display: block;
`;

export const StyledField = styled(Field)`
	border: 1px solid #000;
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

	&:disabled {
		background-color: #c2c2c2;
		color: #000;
	}
`;

export const StyledLink = styled(Link)`
	margin-left: 10px;
`;

export const Span = styled.span`
	color: #ea1c1c;
	display: inline-block;
	margin-bottom: 20px;
`;
