import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '@components/header';
import { Auth } from '@components/auth';
import { SidebarProvider, SidebarContext } from '@shared/context';
import Routes from '@shared/routes';

import { Main, StyledSidebar, StyledFooter } from './App.style';

export function App(props) {
	const { auth } = props;

	if (!auth.user && !auth.validToken) {
		return <Auth />;
	}

	return (
		<SidebarProvider>
			<Header />
			<SidebarContext.Consumer>
				{
					({ isOpen }) => (
						<Fragment>
							{isOpen && <StyledSidebar />}
							<Main isSidebarOpen={isOpen}>
								<Routes />
							</Main>
							<StyledFooter isSidebarOpen={isOpen} />
						</Fragment>
					)
				}
			</SidebarContext.Consumer>
		</SidebarProvider>
	);
}

const mapStateToProps = ({ auth }) => ({
	auth
});

export default connect(mapStateToProps)(App);
