import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Actions from './actions';
import Repos from './repos';
import Search from './search';
import UserInfo from './user-info';
import Loader from './loader/loader';

const MainPage = ({
	showLoader,
	userInfo,
	repos,
	starred,
	handleSearch,
	handleClickRepos,
	handleClickStarred
}) => (
	<div className='container'>
		<Search isDisabled={showLoader} handleSearch={handleSearch} />

		{showLoader && <Loader />}

		{!!userInfo && (
			<Fragment>
				<UserInfo userInfo={userInfo} />
				<Actions
					handleClickSeeRepos={handleClickRepos}
					handleClickSeeStarred={handleClickStarred}
				/>
			</Fragment>
			)
		}

		{!!repos.repos.length && (
			<Repos
				className='repositories'
				title='Repositories'
				repos={repos}
				handlePagination={handleClickRepos}
			/>
		)}

		{!!starred.repos.length && (
			<Repos
				className='starreds'
				title='Favorites'
				repos={starred}
				handlePagination={handleClickStarred}
			/>
		)}
	</div>
);

MainPage.propTypes = {
	showLoader: PropTypes.bool,
	userInfo: PropTypes.object,
	repos: PropTypes.object.isRequired,
	starred: PropTypes.object.isRequired,
	handleSearch: PropTypes.func.isRequired,
	handleClickRepos: PropTypes.func.isRequired,
	handleClickStarred: PropTypes.func.isRequired
};

export default MainPage;
