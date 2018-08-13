import React from 'react';
import { mount } from 'enzyme';

import Clock from './../components/clock/Clock';

describe('<Clock/>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Clock />);
    });

    it('should mount Clock', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should find out a section with a html class Clock', () => {
        expect((wrapper).find('section.Clock').exists()).toBe(true);
    });

    it('should find out divs with classNames Clock__days, Clock__hours, Clock__minutes and Clock__seconds', () => {
        const clock = wrapper.find('.Clock');
        expect((clock).find('div.Clock__days').exists()).toBe(true);
        expect((clock).find('div.Clock__hours').exists()).toBe(true);
        expect((clock).find('div.Clock__minutes').exists()).toBe(true);
        expect((clock).find('div.Clock__seconds').exists()).toBe(true);
    });

    it('should start component with empty values on state', () => {
        expect(wrapper.state().deadline).toBe('');
        expect(wrapper.state().days).toBe(0);
        expect(wrapper.state().hours).toBe(0);
        expect(wrapper.state().minutes).toBe(0);
        expect(wrapper.state().seconds).toBe(0);
    });
});

describe('<Clock deadline={value}/>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Clock deadline={'August 12, 2020'}/>);
    });

    it('should mount Clock with props', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should receive prop deadline', () => {
        expect(wrapper.props().deadline).toBe('August 12, 2020');
    });

    it('should function _getTimeUntil return an object with properties days, hours, minutes and seconds', () => {
        const _methodCall = wrapper.instance()._getTimeUntil(wrapper.props().deadline);
        expect(_methodCall).toHaveProperty('days');
        expect(_methodCall).toHaveProperty('hours');
        expect(_methodCall).toHaveProperty('minutes');
        expect(_methodCall).toHaveProperty('seconds');
    });

    it('should function _getTimeUntil return undefined with empty parameter', () => {
        const _methodCall = wrapper.instance()._getTimeUntil();
        expect(_methodCall).toBeUndefined();
    });

    it('should function _formatTextToPlural return formated time', () => {
        const _methodCallOne = wrapper.instance()._formatTextToPlural('hour', 10);
        const _methodCallTwo = wrapper.instance()._formatTextToPlural('second', 2);
        const _methodCallThree = wrapper.instance()._formatTextToPlural('minute', 1);
        expect(_methodCallOne).toEqual('10 hours');
        expect(_methodCallTwo).toEqual('02 seconds');
        expect(_methodCallThree).toEqual('01 minute');
    });
});