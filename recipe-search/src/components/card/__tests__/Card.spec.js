import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';

import { toTestId } from '@tests/utils';

describe('<Card />', () => {
	it('should render correctly with all props', () => {
		const wrapper = shallow(<Card
			imageSrc="./something.png"
			title="Hello"
			subtitle="world"
			description="Loren ipsum is awesome"
			action={{
				text: 'button',
				onClick: () => { }
			}}
			link={{
				to: 'somewhere.com',
				text: 'link'
			}} />);

		expect(wrapper.find(toTestId('card__title')).text()).toBe('Hello');
		expect(wrapper.find(toTestId('card__subtitle')).text()).toBe('world');
		expect(wrapper.find(toTestId('card__description')).text()).toBe('Loren ipsum is awesome');
		expect(wrapper.find(toTestId('card__button')).text()).toBe('button');
		expect(wrapper.find(toTestId('card__link')).childAt(0).text()).toBe('link');
		expect(wrapper).toMatchSnapshot();
	});

	it('should call `onClick` when click on button', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Card
			action={{
				text: 'button',
				onClick,
			}}
		/>);
		const button = wrapper.find(toTestId('card__button'));

		button.simulate('click');

		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('should render with image', () => {
		const wrapper = shallow(<Card
			imageSrc="./something.png"
			title="Hello"
		/>);
		const image = wrapper.find(toTestId('card__image'));

		expect(image.prop('src')).toBe('./something.png');
		expect(image.prop('alt')).toBe('Hello');
	});
});
