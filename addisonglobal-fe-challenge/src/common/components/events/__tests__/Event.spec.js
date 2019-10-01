import React from 'react';
import { render } from '@testing-library/react';

import Event from '../Event';

jest.mock('../../../contexts/AsideContext', () => ({
	useAsideContext() {
		return {
			handleOpen: () => {}
		};
	}
}));

describe('<Event />', () => {
	it('should render correctly with a event', () => {
		const props = {
			name: 'Brazil x Germany',
			markets: [
				{
					id: 1,
					name: 'One'
				}
			]
		};
		const { container, queryByText } = render(<Event {...props} />);

		expect(queryByText(props.name)).toBeVisible();
		expect(queryByText('One')).toBeVisible();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should not render when has no `markets`', () => {
		const props = {
			name: 'Spain x Belgium',
			markets: []
		};
		const { container, queryByText } = render(<Event {...props} />);

		expect(queryByText(props.name)).not.toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});
});
