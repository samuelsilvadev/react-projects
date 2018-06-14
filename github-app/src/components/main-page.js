import React from 'react';
import PropTypes from 'prop-types';

import Actions from './actions';
import Repos from './repos'
import Search from './search'
import UserInfo from './user-info'

const MainPage = ({ userInfo, repos, starred, handleSearch }) => (
    <div className="container">
        <Search handleSearch={handleSearch} />
        {!!userInfo && <UserInfo userInfo={userInfo} />}
        {!!userInfo && <Actions />}
        {!!repos.length && <Repos
            className="repositories"
            title="Repositories"
            repos={repos} />
        }
        {!!starred.length && <Repos
            className="starreds"
            title="Favorites"
            repos={starred} />
        }
    </div>
);

MainPage.propTypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
};

export default MainPage;