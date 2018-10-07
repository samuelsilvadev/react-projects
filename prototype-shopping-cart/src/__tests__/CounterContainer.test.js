import React from 'react';
import { shallow } from 'enzyme';

import CounterContainer from '../components/counter/CounterContainer';

const counters = [
	{
		id: 1,
		value: 2,
	},
	{
		id: 2,
		value: 0,
	},
	{
		id: 3,
	}
];

describe('<CounterContainer />', () => {
	it('should render correctly without props', () => {
		const counterContainerComponent = shallow(<CounterContainer />);

		expect(counterContainerComponent).toMatchSnapshot();
	});

	it('should render correctly with props', () => {
		const counterContainerComponent = shallow(<CounterContainer />);
		const instance = counterContainerComponent.instance();

		counterContainerComponent.setState({ counters });

		expect(instance.state.counters.length).toBe(counters.length);
		expect(counterContainerComponent).toMatchSnapshot();
	});

	it('should call `_handleClickResetBtn` when click on reset button', () => {
		const counterContainerComponent = shallow(<CounterContainer />);
		const instance = counterContainerComponent.instance();

		instance._handleClickResetBtn = jest.fn(instance._handleClickResetBtn);
		instance.forceUpdate();
		counterContainerComponent.update();
		counterContainerComponent.find('[data-test="counter-container-btn-reset"]').simulate('click');

		expect(instance._handleClickResetBtn).toHaveBeenCalled();
	});

	it('should execute `_handleClickIncrementBtn` correctly and update state', () => {
		const counterContainerComponent = shallow(<CounterContainer />);
		const instance = counterContainerComponent.instance();
		const ID_COUNTER = 3;
		
		counterContainerComponent.setState({ counters });
		instance.setState = jest.fn();
		
		instance._handleClickIncrementBtn(ID_COUNTER);

		expect(instance.setState).toHaveBeenCalled();
		expect(instance.state.counters.find(c => c.id === ID_COUNTER).value).toBe(1);
	});

	it('should execute `_removeCounter` correctly and update state', () => {
		const counterContainerComponent = shallow(<CounterContainer />);
		const instance = counterContainerComponent.instance();
		const ID_COUNTER = 3;
		
		counterContainerComponent.setState({ counters });
		instance._removeCounter(ID_COUNTER);

		expect(instance.state.counters.find(c => c.id === ID_COUNTER)).toBeUndefined();
	});

	it('should execute `_resetAllCounters` correctly and update state', () => {
		const counterContainerComponent = shallow(<CounterContainer />);
		const instance = counterContainerComponent.instance();
		
		counterContainerComponent.setState({ counters });
		instance._resetAllCounters();

		const isAllZeros = instance.state.counters.every(c => c.value === 0);

		expect(isAllZeros).toBe(true);
	});
});
