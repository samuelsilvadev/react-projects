import styled from '@emotion/styled';

import Sidebar from '@components/sidebar';
import Footer from '@components/footer';

const SIDEBAR_WIDTH = '250px'

export const StyledSidebar = styled(Sidebar)`
	width: ${ SIDEBAR_WIDTH };
`;

export const Main = styled.main`
	margin-left: ${(props) => props.isSidebarOpen ? `${SIDEBAR_WIDTH}` : ''};
	padding: 20px;
`;

export const StyledFooter = Main.withComponent(Footer);