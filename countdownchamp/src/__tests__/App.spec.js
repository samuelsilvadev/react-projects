import React from 'react';
import { mount } from 'enzyme'

import App from './../components/app/App';

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App />);
    });

    it('should mount App', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should find a header with a html class App__header', () => {
        const container = wrapper.find('.App');
        expect((container).find('header.App__header').exists()).toBe(true);
    });

    it('should find a div with a html class App__event', () => {
        const container = wrapper.find('.App');
        expect((container).find('div.App__event').exists()).toBe(true);
    });

    it('should find a section with a html class Add-Event', () => {
        const container = wrapper.find('.App');
        expect((container).find('section.Add-Event').exists()).toBe(true);
    });

    it('should find a form with a html class Add-Event__form', () => {
        const container = wrapper.find('.App');
        expect((container).find('form.Add-Event__form').exists()).toBe(true);
    });

    it('should render app with newDeadline state empty', () => {
        const DEADLINE = '';
        wrapper.setState({
            deadline: DEADLINE
        });
        expect(wrapper.state().deadline).toBe(DEADLINE);
    });

    it('should test if _handleOnChangeDeadline is updating newDeadline in state ', () => {
        const DEADLINE = 'January 01, 2020';
        wrapper.instance()._handleOnChangeDeadline({
            target: {
                value: DEADLINE
            }
        });
        expect(wrapper.state().newDeadline).toBe(DEADLINE);
    });


    it('should test if _setNewDeadLine is updating deadline in state ', () => {
        const DEADLINE = 'January 01, 2020';
        
        wrapper.instance()._handleOnChangeDeadline({
            target: {
                value: DEADLINE
            }
        });

        wrapper.instance()._setNewDeadLine({
            preventDefault: function () { }
        });

        expect(wrapper.state().deadline).toBe(DEADLINE);
    });

});