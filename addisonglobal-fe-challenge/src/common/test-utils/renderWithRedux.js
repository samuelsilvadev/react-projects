import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

export const renderWithRedux = ({ initialState, middlewares = [] }) => (
	component
) => {
	const mockStore = configureStore(middlewares);
	const store = mockStore(initialState);

	return render(<Provider store={store}>{component}</Provider>);
};
