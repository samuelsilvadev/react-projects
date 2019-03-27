import React, { Fragment } from 'react';

import VideosList from './videos-list/VideosList';

import { Title, Header, Main, Footer, P, RegisterVideoButton, RegisterVideoStyled } from './App.style';

const App = () => (
	<Fragment>
		<Header>
			<Title data-enzyme-id="app-title">React Flix</Title>
			<RegisterVideoButton type="button">
				Register a video
			</RegisterVideoButton>
		</Header>
		<Main>
			<RegisterVideoStyled />
			<VideosList />
		</Main>
		<Footer>
			<P>
				{ new Date().getFullYear() }
			</P>
		</Footer>
	</Fragment>
);

export default App;
