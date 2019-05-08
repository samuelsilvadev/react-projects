import React, { Fragment, useState, useCallback } from 'react';

import Header from '@components/header';

import { Main, StyledSidebar, StyledFooter } from './App.style';

export function App() {
	const [isOpen, setOpen] = useState(true);

	const toggleOpen = useCallback(() => {
		setOpen(open => !open);
	}, []);

	return (
		<Fragment>
			<Header onClick={ toggleOpen } />
			{ isOpen && <StyledSidebar /> }
			<Main isSidebarOpen={ isOpen }>
				Content
			</Main>
			<StyledFooter isSidebarOpen={ isOpen } />
		</Fragment>
	);
}

export default App;
