import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../Modal';

describe('<Modal />', () => {
	it('should render correctly with button, close icon and correct children', () => {
		const requiredProps = {
			title: 'modal',
			onClose: jest.fn(),
		};
		const tree = shallow(
			<Modal { ...requiredProps }>
				<div data-enzyme-id="modal-children" />
			</Modal>
		);
		const $button = tree.find('[data-enzyme-id="modal-close-button"]');
		const $icon = tree.find('[data-enzyme-id="modal-close-icon"]');
		const $children = tree.find('[data-enzyme-id="modal-children"]');
		
		expect(tree.prop('aria-labelledby')).toBe(requiredProps.title);
		expect($icon.prop('aria-label')).toBe('Close Modal');

		expect($button).toBeDefined();
		expect($icon).toBeDefined();
		expect($children).toBeDefined();
		expect(tree).toMatchSnapshot();
	});

	it('should call `onClose` when click in close button', () => {
		const requiredProps = {
			title: 'modal',
			onClose: jest.fn(),
		};
		const tree = shallow(
			<Modal { ...requiredProps }>
				<div data-enzyme-id="modal-children" />
			</Modal>
		);
		const $button = tree.find('[data-enzyme-id="modal-close-button"]');
		
		$button.simulate('click');

		expect(requiredProps.onClose).toHaveBeenCalledTimes(1);
	});
});
