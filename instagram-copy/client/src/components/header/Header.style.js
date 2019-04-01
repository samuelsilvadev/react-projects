import styled from '@emotion/styled';

import { WHITE, NAV_LAYER, NAVIGATION_HEIGHT } from '../style';

import sprite from '../../assets/sprite.png';

export const Navigation = styled.nav`
	background-color: ${WHITE};
	border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
	position: fixed;
	top: 0;
	width: 100%;
	z-index: ${NAV_LAYER};
	height: ${NAVIGATION_HEIGHT};
`;

export const LinkWrapper = styled.div`
	margin: 0 auto;
    padding: 26px 0;
	width: 70%;
`;

export const Link = styled.a`
	background-position: -176px 0px;
	background-image: url(${sprite});
	background-size: 405px 379px;
	background-repeat: no-repeat;
	display: block;
	height: 35px;
	width: 176px;
	text-indent: -1000%;
`;
