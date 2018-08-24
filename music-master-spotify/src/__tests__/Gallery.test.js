import React from 'react';
import { shallow } from 'enzyme';

import Gallery from '../components/gallery/Gallery';

describe('<Gallery />', () => {
	it('should render correctly component', () => {
		const tree = shallow(<Gallery />);

		expect(tree).toMatchSnapshot();
	});
});
