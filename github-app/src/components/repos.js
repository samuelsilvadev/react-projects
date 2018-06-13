import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({ className, title, repos }) => (
    <div className={className}>
        <h2>{title}</h2>
        <ul>
            {
                repos.map((repo, index) => <li key={index} ><a href={repo.link}>{repo.title}</a></li>)
            }
        </ul>
    </div>
);

Repos.defaultProps = {
    className: '',
    title: 'CHANGE THIS TITLE'
};

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
};

export default Repos;