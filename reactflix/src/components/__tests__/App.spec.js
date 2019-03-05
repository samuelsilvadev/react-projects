import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('should render correctly with title', () => {
		const tree = shallow(<App />);
		const $title = tree.find('[data-enzyme-id="app-title"]');

		expect($title).toBeDefined();
		expect($title.text()).toBe('React Flix');
		expect(tree).toMatchSnapshot();
	});
});
