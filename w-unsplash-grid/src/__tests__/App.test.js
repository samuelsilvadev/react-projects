import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

jest.mock('../state/store', () => {
	const configureStore = require('redux-mock-store').default;

	return configureStore()({});
});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

