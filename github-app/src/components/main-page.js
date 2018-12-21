import React from 'react';
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

		{!!userInfo && <UserInfo userInfo={userInfo} />}

		{!!userInfo && (
			<Actions
				handleClickSeeRepos={handleClickRepos}
				handleClickSeeStarred={handleClickStarred}
			/>
		)}

		{!!repos.length && (
			<Repos
				className='repositories'
				title='Repositories'
				repos={repos}
				handlePagination={handleClickRepos}
			/>
		)}

		{!!starred.length && (
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
	repos: PropTypes.array.isRequired,
	starred: PropTypes.array.isRequired,
	handleSearch: PropTypes.func.isRequired,
	handleClickRepos: PropTypes.func.isRequired,
	handleClickStarred: PropTypes.func.isRequired
};

export default MainPage;
