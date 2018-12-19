import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import withPadding from './../decorators/withPadding';

import {
	Actions,
	Loader,
	Pagination,
	Repos,
	Search,
	UserInfo
} from './../../src/components';

storiesOf('Components', module)
	.addDecorator(withPadding)
	.addDecorator(withKnobs)
	.add('Actions', () => {
		return (
			<Actions
				handleClickSeeRepos={action('getting repositories...')}
				handleClickSeeStarred={action(
					'getting starred repositories...'
				)}
			/>
		);
	})
	.add('Loader', () => {
		return <Loader />;
	})
	.add('Pagination',  () => {
		const _handleClick = function (page) {
			console.log("​_handleClick -> page", page);
		}

		return (
			<Pagination
				total={10}
				active={5}
				pageLink="http://mypage/page/%page%"
				onClick={_handleClick} />
		);
	})
	.add('Repositories', () => {
		const props = {
			title: 'Repositories',
			repos: [
				{
					name: 'trip-to-whatever',
					html_url: '#'
				}
			]
		};

		return <Repos {...props} />;
	})
	.add('Search', () => {
		return (
			<Search
				handleSearch={action('Searching for something...')}
				isDisabled={boolean('isDisabled', false)}
			/>
		);
	})
	.add('UserInfo', () => {
		return (
			<UserInfo userInfo={object('userInfo', {
				userName: 'Samuel SIlva',
				repos: 64,
				followers: 36,
				following: 119,
				photo: 'https://avatars3.githubusercontent.com/u/13966565?v=4',
				login: 'samuelsilvadev',
			})}/>
		);
	});
