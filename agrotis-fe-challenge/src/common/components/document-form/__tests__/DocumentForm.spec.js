import React from 'react';
import { render, fireEvent, act, wait } from '@testing-library/react';

import DocumentForm, { REQUIRED_MESSAGE } from '../DocumentForm';

const defaultProps = {
	onSubmit: jest.fn(),
	formId: 'formId'
};

describe('<DocumentForm />', () => {
	beforeEach(jest.clearAllMocks);

	it('should render correctly', () => {
		const { container, queryByLabelText, queryByText } = render(
			<DocumentForm {...defaultProps} />
		);

		expect(queryByLabelText('Name')).toBeVisible();
		expect(queryByLabelText('Description')).toBeVisible();
		expect(queryByText('0/20')).toBeVisible();
		expect(queryByText('0/240')).toBeVisible();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should submit correctly', async () => {
		const { queryByLabelText, queryByTestId } = render(
			<DocumentForm {...defaultProps} />
		);

		const $name = queryByLabelText('Name');
		const $description = queryByLabelText('Description');
		const $form = queryByTestId('documentForm');

		await act(async () => {
			fireEvent.change($name, { target: { value: '123456' } });
		});

		await act(async () => {
			fireEvent.change($description, {
				target: { value: '12345678910' }
			});
		});

		await act(async () => {
			fireEvent.submit($form);
		});

		expect(defaultProps.onSubmit).toHaveBeenCalledTimes(1);
	});

	it('should set visible required message', async () => {
		const { queryByLabelText, queryAllByText } = render(
			<DocumentForm {...defaultProps} />
		);

		const $name = queryByLabelText('Name');
		const $description = queryByLabelText('Description');

		await act(async () => {
			fireEvent.blur($name);
		});

		await act(async () => {
			fireEvent.blur($description);
		});

		expect(queryAllByText(REQUIRED_MESSAGE)).toHaveLength(2);
	});

	it('should set visible maxlength message', async () => {
		const { queryByLabelText, queryByText } = render(
			<DocumentForm {...defaultProps} />
		);

		const $name = queryByLabelText('Name');

		await act(async () => {
			fireEvent.change($name, {
				target: { value: '123456789123456789123456789' }
			});
		});

		await act(async () => {
			fireEvent.blur($name);
		});

		expect(queryByText('name must be at most 20 characters')).toBeVisible();
	});
});
