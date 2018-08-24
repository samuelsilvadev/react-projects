import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/app/App';

describe('<App />', () => {
    it('should render correctly component', () => {
        const tree = shallow(<App />);
        
        expect(tree).toMatchSnapshot();
    });
});