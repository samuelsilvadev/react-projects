import styled from '@emotion/styled';

const HEADER_HEIGHT = '60px';
const FOOTER_HEIGHT = '30px';

export const Title = styled.h1`
	text-align: center;
`;

export const Header = styled.header`
	height: ${HEADER_HEIGHT};
`;

export const Main = styled.main`
	min-height: calc(100% - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
`;

export const Footer = styled.footer`
	height: ${FOOTER_HEIGHT};
`;
