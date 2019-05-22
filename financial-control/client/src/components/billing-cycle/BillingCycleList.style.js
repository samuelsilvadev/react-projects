import styled from '@emotion/styled';

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
`;

export const Td = styled.td`
	padding: 10px;
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
