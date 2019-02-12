import React from 'react';
import { shallow } from 'enzyme';

import { Counter } from './../Counter';

describe('<Counter />', () => {
    describe('Unconnected counter', () => {
        it('should render component correctly without props', () => {
            const tree = shallow(<Counter />);
    
            expect(tree).toMatchSnapshot();
        });
    
        it('should render component correctly with props', () => {
            const props = {
                counter: 1,
                increment: () => {},
                decrement: () => {},
            };
            const tree = shallow(<Counter { ...props } />);
            const $counter = tree.find('[data-enzyme-id="counter"]');
    
            expect($counter.text()).toBe('1');
            expect(tree).toMatchSnapshot();
        });
    
        it('should call `increment` if click on increment button', () => {
            const props = {
                counter: 1,
                increment: jest.fn(),
            };
            const tree = shallow(<Counter { ...props } />);
            const $incrementButton = tree.find('[data-enzyme-id="counter-increment-button"]');
    
            $incrementButton.simulate('click');
    
            expect(props.increment).toHaveBeenCalledTimes(1);
        });
    
        it('should call `decrement` if click on decrement button', () => {
            const props = {
                counter: 1,
                decrement: jest.fn(),
            };
            const tree = shallow(<Counter { ...props } />);
            const $decrementButton = tree.find('[data-enzyme-id="counter-decrement-button"]');
    
            $decrementButton.simulate('click');
    
            expect(props.decrement).toHaveBeenCalledTimes(1);
        });
        
    });
});