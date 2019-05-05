import styled from '@emotion/styled';

import MenuItem from './MenuItem';

export const Ul = styled.ul`
	list-style: none;
	padding: 50px 20px;
	width: 100%;
`;

export const StyledMenuItem = styled(MenuItem)`
	margin-bottom: 15px;

	& a {
		color: #fff;
		text-decoration: none;
	}
`;
