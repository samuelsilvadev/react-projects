import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Table = styled.table`
	text-align: center;
	width: 100%;
`;

export const Thead = styled.thead`
	background-color: #1c2025;
	color: #fff;
`;

export const Th = styled.th`
	padding: 10px;
	width: ${({ isActions }) => isActions ? '140px' : 'auto' };
`;

export const Td = styled.td`
	padding: 10px;

	${({ isActions }) => isActions && css`
		display: flex;
		justify-content: space-evenly;
	`}
`;

export const Tr = styled.tr`
	&:nth-child(even) {
		background-color: #ebebeb;
	}
`;

export const ErrorP = styled.p`
	background-color: #ea6565;
	border: 1px solid red;
	color: #fff;
	padding: 10px;
`;

export const LoadingP = styled.p`
	padding: 10px;
	text-align: center;
`;

export const Button = styled.button`
	background-color: #1c2025;
	border: none;
	cursor: pointer;
	color: #fff;
	padding: 5px;
`;
