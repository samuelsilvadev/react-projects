import React from 'react';
import { shallow } from 'enzyme';

import Profile from '../components/profile/Profile';

describe('<Profile />', () => {
	it('should render correctly component', () => {
		const artist = {
			images: [{
                url: 'https://google.com',
                name: 'Test',
            }],
            followers: {
                total: 10,
            }
		};

		const tree = shallow(<Profile artist={artist}/>);

		expect(tree).toMatchSnapshot();
	});
});
