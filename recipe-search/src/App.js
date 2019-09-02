import React from 'react';

import Router from './Router';

import { RecipesContextProvider } from '@context/recipes';

import './App.css';

function App() {
	return (
		<div>
			<header className="header">
				<h1>Recipe Repository</h1>
			</header>
			<main className="main">
				<RecipesContextProvider>
					<Router />
				</RecipesContextProvider>
			</main>
		</div>
	);
}

export default App;
