import React from 'react';
import PropTypes from 'prop-types';

function _renderListItem(repository) {
    return (
        <li className="repos__item" key={repository.name} >
            <a target="_blank" rel="noopener noreferrer" href={repository.html_url}>
                {repository.name}
            </a>
        </li>
    );
}

const Repos = ({ className, title, repos }) => (
    <div className={className}>
        <h2>{title}</h2>
        <ul className="repos">
            {
                repos.map(_renderListItem)
            }
        </ul>
    </div>
);

Repos.defaultProps = {
    className: '',
	repos: [],
};

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
};

export default Repos;
