import React from 'react';
import { shallow } from 'enzyme';

import Counter from './../components/counter/Counter';

describe('<Counter />', () => {
    it('should render correctly and match snapshot', () => {
        const CounterComponent = shallow(<Counter id={1} value={0} />);
        const instance = CounterComponent.instance();
        
        expect(instance.props.value).toBe(0);
        expect(instance.state.value).toBe(0);
        expect(CounterComponent).toMatchSnapshot();
    });

    it('should update state after `_handleClickIncrementBtn` be called', () => {
        const CounterComponent = shallow(<Counter id={1} value={1} />);
        const instance = CounterComponent.instance();
        
        expect(instance.props.value).toBe(1);
        expect(instance.state.value).toBe(1);

        instance._handleClickIncrementBtn();

        expect(instance.state.value).toBe(2);
    });

    it('should return correct value after `_formatCount` be called', () => {
        const CounterComponent = shallow(<Counter id={1} />);
        const instance = CounterComponent.instance();
        
        expect(instance._formatCount()).toBe('Zero');

        instance._handleClickIncrementBtn();

        expect(instance._formatCount()).toBe(1);
    });
});
