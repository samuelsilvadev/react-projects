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
				value: 2,
			},
			{
				value: 0,
			},
			{}
		];
        const CounterContainerComponent = shallow(<CounterContainer counters={counters} />);
		const instance = CounterContainerComponent.instance();

		expect(instance.props.counters.length).toBe(counters.length);
        expect(CounterContainerComponent).toMatchSnapshot();
    });
});
