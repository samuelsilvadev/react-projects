import React, { Fragment } from 'react';

import { Main } from './App.style';

import Header from './header';
import Post from './post';

const POST_MOCK = [
	{
		avatar: 'https://avatars1.githubusercontent.com/u/13966565?s=460&v=4',
		nickname: 'Samuel Silva',
		image: 'https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		caption: 'Something...',
	},
	{
		avatar: 'https://avatars1.githubusercontent.com/u/13966565?s=460&v=4',
		nickname: 'Samuel Silva',
		image: 'https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		caption: 'Something...',
	},
];

const _renderPost = (postData, index) => (
	<Post key={ index }  { ...postData } />
);

const App = () => (
	<Fragment>
		<Header />
		<Main>
			{ POST_MOCK.map(_renderPost) }
		</Main>
	</Fragment>
);

export default App;
