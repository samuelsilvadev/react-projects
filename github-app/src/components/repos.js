import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ className, title, repos }) => (
    <div className={className}>
        <h2>{title}</h2>
        <ul className="repos">
            {
                repos.map((repo, index) => <li className="repos__item" key={index} ><a target="_blank" href={repo.html_url}>{repo.name}</a></li>)
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