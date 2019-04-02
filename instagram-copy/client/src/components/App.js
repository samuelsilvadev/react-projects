import React, { Fragment } from 'react';

import { Main } from './App.style';

import Header from './header';
import Post from './post';

const App = () => (
	<Fragment>
		<Header />
		<Main>
			<Post />
			<Post />
		</Main>
	</Fragment>
);

export default App;
