import React from 'react';
import { render } from '@testing-library/react';

import ConnectedEvents, { Events } from '../Events';
import { renderWithRedux } from '../../../test-utils/renderWithRedux';

import eventsMock from './events.mock.json';

jest.mock('../../../store/actions/eventsActions', () => ({
	fetchEvents: () => ({ type: 'GET_EVENTS' })
}));

jest.mock('../../../contexts/AsideContext', () => ({
	useAsideContext() {
		return {
			handleOpen: () => {}
		};
	}
}));

jest.mock('../../market/Market', () => () => null);

describe('<Events />', () => {
	describe('Unconnected Events Component', () => {
		it('should call `fetchEvents` after components mount', () => {
			const props = {
				fetchEvents: jest.fn()
			};

			render(<Events {...props} />);

			expect(props.fetchEvents).toHaveBeenCalledTimes(1);
		});

		it('should render a list of events correctly', () => {
			const props = {
				fetchEvents: () => {},
				events: [
					{
						id: 1,
						name: 'Rick and Morty',
						markets: [
							{
								id: 1,
								name: 'first trip to mars'
							}
						]
					}
				]
			};

			const { container, queryByText } = render(<Events {...props} />);

			expect(queryByText('Rick and Morty')).toBeInTheDocument();
			expect(container.firstChild).toMatchSnapshot();
		});
	});

	describe('Connected Events', () => {
		it('should render correctly getting data from store', () => {
			const initialState = eventsMock;

			const { container, queryByText } = renderWithRedux({
				initialState
			})(<ConnectedEvents />);

			expect(queryByText('Real Madrid vs Barcelona')).toBeInTheDocument();
			expect(container.firstChild).toMatchSnapshot();
		});
	});
});
