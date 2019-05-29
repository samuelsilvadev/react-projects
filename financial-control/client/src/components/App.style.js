import styled from '@emotion/styled';

import Sidebar from '@components/sidebar';
import Footer from '@components/footer';

import { SIDEBAR_WIDTH, HEADER_HEIGHT, FOOTER_HEIGHT } from './config.styles';

export const StyledSidebar = styled(Sidebar)`
	width: ${ SIDEBAR_WIDTH };
`;

export const Main = styled.main`
	height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
	margin-left: ${(props) => props.isSidebarOpen ? `${SIDEBAR_WIDTH}` : ''};
    overflow: scroll;
	padding: 20px;
`;

export const StyledFooter = styled(Footer)`
	margin-left: ${(props) => props.isSidebarOpen ? `${SIDEBAR_WIDTH}` : ''};
	padding: 20px;
`;
