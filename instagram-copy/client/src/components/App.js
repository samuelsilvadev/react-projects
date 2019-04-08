import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { Main } from './App.style';

import Header from './header';
import Posts from './posts';

const client = new ApolloClient({
	uri: `${process.env.SERVER_URI}graphql`,
});

const App = () => (
	<ApolloProvider client={client}>
		<Header />
		<Main>
			<Posts />
		</Main>
	</ApolloProvider>
);

export default App;
