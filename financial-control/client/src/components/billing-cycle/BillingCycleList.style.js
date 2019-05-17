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
`
