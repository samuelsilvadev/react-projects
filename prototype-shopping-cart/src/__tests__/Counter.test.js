import React from 'react';
import { shallow } from 'enzyme';

import Counter from './../components/counter/Counter';

describe('<Counter />', () => {
	it('should render correctly and match snapshot', () => {
		const counterComponent = shallow(<Counter id={1} value={0} />);
		const instance = counterComponent.instance();

		expect(instance.props.id).toBe(1);
		expect(instance.props.value).toBe(0);
		expect(counterComponent).toMatchSnapshot();
	});

	it('should call `_handleClickIncrementBtn` when click on increment button', () => {
		const counterComponent = shallow(<Counter id={1} value={1} />);
		const instance = counterComponent.instance();
		instance._handleClickIncrementBtn = jest.fn(instance._handleClickIncrementBtn);
		instance.forceUpdate()
		counterComponent.update()
		counterComponent.find('[data-test="counter-btn-increment"]').simulate('click');

		expect(instance._handleClickIncrementBtn).toHaveBeenCalled();
	});

	it('should call `_handleClickDeleteBtn` when click on delete button', () => {
		const counterComponent = shallow(<Counter id={2} value={100} />);
		const instance = counterComponent.instance();
		instance._handleClickDeleteBtn = jest.fn(instance._handleClickDeleteBtn);
		instance.forceUpdate()
		counterComponent.update()
		counterComponent.find('[data-test="counter-btn-delete"]').simulate('click');

		expect(instance._handleClickDeleteBtn).toHaveBeenCalled();
	});

	it('should return correct value after `_formatCount` be called', () => {
		const counterComponent = shallow(<Counter id={1} />);
		const instance = counterComponent.instance();
		const ZERO = 'Zero';

		expect(instance._formatCount()).toBe(ZERO);
	});
});
