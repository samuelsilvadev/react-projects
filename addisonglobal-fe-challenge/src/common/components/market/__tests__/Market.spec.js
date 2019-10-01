import React from 'react';
import { render } from '@testing-library/react';

import Market from '../Market';

import { AsideContextProvider } from '../../../contexts/AsideContext';

describe('<Market />', () => {
	it('should render correctly with all props', () => {
		const props = {
			name: 'Player to Score First',
			selections: [
				{
					id: '1',
					name: 'Messi',
					price: 1.3
				}
			]
		};
		const { container, queryByText } = render(
			<AsideContextProvider>
				<Market {...props} />
			</AsideContextProvider>
		);

		expect(queryByText(props.name)).toBeVisible();
		expect(queryByText(props.selections[0].name)).toBeVisible();
		expect(queryByText(String(props.selections[0].price))).toBeVisible();
		expect(container.firstChild).toMatchSnapshot();
	});
});
