import React, { useState } from 'react';

import Header from '@components/header';
import Sidebar from '@components/sidebar';

export function App() {
	const [isOpen, setOpen] = useState(true);

	const toggleOpen = () => {
		setOpen(open => !open);
	};

	return (
		<div>
			<Header onClick={ toggleOpen } />
			{ isOpen && <Sidebar /> }
		</div>
	);
}

export default App;
