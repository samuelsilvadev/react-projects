import React, { Fragment } from 'react';

import Header from '@components/header';
import { SidebarProvider, SidebarContext } from '@shared/context';

import { Main, StyledSidebar, StyledFooter } from './App.style';

export function App() {
	return (
		<SidebarProvider>
			<Header />
			<SidebarContext.Consumer>
				{
					({ isOpen }) => (
						<Fragment>
							{ isOpen && <StyledSidebar /> }
							<Main isSidebarOpen={ isOpen }>
								Content
							</Main>
							<StyledFooter isSidebarOpen={ isOpen } />
						</Fragment>
					)
				}
			</SidebarContext.Consumer>
		</SidebarProvider>
	);
}

export default App;
