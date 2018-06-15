import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ handleClickSeeRepos, handleClickSeeStarred }) => (
    <div className="actions">
        <button onClick={handleClickSeeRepos}>See repositories</button>
        <button onClick={handleClickSeeStarred}>See favorites</button>
    </div>
);

Actions.defaultProps = {
    handleClickSeeRepos: () => console.error('handleClickSeeRepos empty body'),
    handleClickSeeStarred: () => console.error('handleClickSeeStarred empty body')
};

Actions.propTypes = {
    handleClickSeeRepos: PropTypes.func,
    handleClickSeeStarred: PropTypes.func
};

export default Actions;