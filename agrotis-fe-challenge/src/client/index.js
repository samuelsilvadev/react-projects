import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import App from '../common/App';

hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
