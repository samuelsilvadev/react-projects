'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.querySelector('[data-js="root"]'),
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		render(NextApp);
	});
}
