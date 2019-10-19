import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

describe('<Header />', () => {
	it('should render correctly', () => {
		const { container, queryByAltText } = render(<Header />);

		expect(queryByAltText('Brand from Agrotis')).toBeVisible();
		expect(container.firstChild).toMatchSnapshot();
	});
});
