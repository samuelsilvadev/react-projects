import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import App from '../common/App';

import configureStore from '../common/store/configureStore';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
