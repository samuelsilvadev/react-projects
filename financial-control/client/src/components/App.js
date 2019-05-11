import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '@components/header';
import { SidebarProvider, SidebarContext } from '@shared/context';
import Routes from '@shared/routes';

import { Main, StyledSidebar, StyledFooter } from './App.style';

export function App() {
	return (
		<BrowserRouter>
			<SidebarProvider>
				<Header />
				<SidebarContext.Consumer>
					{
						({ isOpen }) => (
							<Fragment>
								{ isOpen && <StyledSidebar /> }
								<Main isSidebarOpen={ isOpen }>
									<Routes />
								</Main>
								<StyledFooter isSidebarOpen={ isOpen } />
							</Fragment>
						)
					}
				</SidebarContext.Consumer>
			</SidebarProvider>
		</BrowserRouter>
	);
}

export default App;
