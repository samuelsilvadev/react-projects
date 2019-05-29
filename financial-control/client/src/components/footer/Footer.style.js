import styled from '@emotion/styled';

import { FOOTER_HEIGHT } from '../config.styles';

export const StyledFooter = styled.footer`
	background-color: #eeeeef;
	bottom: 0;
	font-size: 14px;
	height: ${FOOTER_HEIGHT};
	position: fixed;
	padding: 20px;
	width: 100%;

	& a {
		text-decoration: none;
		color: inherit;
		transition: color 0.4s ease-in-out;

		:focus,
		:hover {
			color: #8d8c90;
		}
	}
`;

export const Span = styled.span`
	margin-right: 5px;
`;
