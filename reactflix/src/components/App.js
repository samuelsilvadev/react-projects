import React, { Fragment } from 'react';

import { Title, Header, Main, Footer } from './App.style';

const App = () => (
	<Fragment>
		<Header>
			<Title data-enzyme-id="app-title">React Flix</Title>
		</Header>
		<Main />
		<Footer>
			<p>
				{ new Date().getFullYear() }
			</p>
		</Footer>
	</Fragment>
);

export default App;
