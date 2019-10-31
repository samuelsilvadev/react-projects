import reactime from 'reactime';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import App from '../common/App';

const rootContainer = document.getElementById('root');

hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootContainer
);

reactime(rootContainer);

if (module.hot) {
	module.hot.accept();
}
