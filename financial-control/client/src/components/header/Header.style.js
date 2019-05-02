import styled from '@emotion/styled';

import { BurgerMenu } from '@components/icons';

export const StyledHeader = styled.header`
	align-items: center;
	background-color: #000;
	display: flex;
	height: 50px;
	width: 100%;
`;

export const Link = styled.a`
	color: #fff;
	margin-left: 10px;
`;

export const Button = styled.button`
	border: none;
	cursor: pointer;
	height: 100%;
	padding: 10px;
`

export const StyledBurgerIcon = styled(BurgerMenu)`
	height: 1.5rem;
	width: 1.5rem;
`;
