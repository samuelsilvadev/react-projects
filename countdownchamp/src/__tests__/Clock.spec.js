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
});