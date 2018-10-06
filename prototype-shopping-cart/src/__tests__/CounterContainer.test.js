import React from 'react';
import { shallow } from 'enzyme';

import CounterContainer from '../components/counter/CounterContainer';

describe('<CounterContainer />', () => {
    it('should render correctly without props', () => {
        const CounterContainerComponent = shallow(<CounterContainer />);

        expect(CounterContainerComponent).toMatchSnapshot();
	});
	
	it('should render correctly with props', () => {
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
		const CounterContainerComponent = shallow(<CounterContainer />);
		CounterContainerComponent.setState({ counters });
		const instance = CounterContainerComponent.instance();

		expect(instance.state.counters.length).toBe(counters.length);
        expect(CounterContainerComponent).toMatchSnapshot();
    });
});
