import React from 'react';
import { Provider } from 'react-redux';

import store from './state/store';

import ImagesGrid from './components/ImagesGrid';

import './App.css';

function App() {
	return (
		<Provider store={store}>
			<ImagesGrid />
		</ Provider>
	);
}

export default App;
