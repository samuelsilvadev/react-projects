import React from 'react';
import { shallow } from 'enzyme';

import App from './../components/app/App';

describe('<App />', () => {
    it('should render correctly and match snapshot', () => {
        const AppComponent = shallow(<App />);

        expect(AppComponent).toMatchSnapshot();
    });
});
