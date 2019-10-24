import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { Header, HEADER_HEIGHT } from './components';
import Home from './pages/Home';
import { GlobalStyle } from './Global.style';
import { gteSmallMedia } from './media.style';

const Main = styled.main`
	background-color: #ecf0f1;
	min-height: calc(100vh - ${HEADER_HEIGHT});
	padding: 2rem;

	${gteSmallMedia} {
		padding: 2rem 4rem;
	}
`;

const App = () => (
	<>
		<GlobalStyle />
		<Header />
		<Main>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Main>
	</>
);

export default App;
