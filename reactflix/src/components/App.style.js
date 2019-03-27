import styled from '@emotion/styled';

import { HEADER_HEIGHT, FOOTER_HEIGHT, BACKGROUND_COLOR, WHITE, BLACK } from './style';

import RegisterVideo from './register-video/RegisterVideo';

export const Title = styled.h1`
	margin: 0;
`;

export const Header = styled.header`
	align-items: center;
	background-color: ${BACKGROUND_COLOR};
	color: ${WHITE};
	display: flex;
	justify-content: center;
	height: ${HEADER_HEIGHT};
	position: relative;
`;

export const RegisterVideoButton = styled.button`
	background-color: ${BLACK};
	color: ${WHITE};
	cursor: pointer;
	height: 50px;
	position: absolute;
	right: 3px;
`;

export const Main = styled.main`
	min-height: calc(100% - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
`;

export const RegisterVideoStyled = styled(RegisterVideo)`
	margin: auto;
`;

export const Footer = styled.footer`
	align-items: center;
	background-color: ${BACKGROUND_COLOR};
	color: ${WHITE};
	display: flex;
	height: ${FOOTER_HEIGHT};
	justify-content: center;
`;

export const P = styled.p`
	margin: 0;
`;
