import React from 'react';
import { render } from '@testing-library/react';

import DocumentList from '../DocumentList';

describe('<DocumentList />', () => {
	it('should render correctly when has `documents` prop', () => {
		const documents = [
			{
				name: 'Document 1',
				description: 'Description 1'
			}
		];
		const { container, queryByText } = render(
			<DocumentList documents={documents} />
		);

		expect(queryByText(documents[0].name)).toBeVisible();
		expect(queryByText(documents[0].description)).toBeVisible();
		expect(container).toMatchSnapshot();
	});

	it('should not render if has no `documents` prop', () => {
		const { container, queryByTestId } = render(<DocumentList />);

		expect(queryByTestId('documentList')).not.toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
